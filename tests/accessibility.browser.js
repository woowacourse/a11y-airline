import { act, createElement, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '../src/App.tsx';
import '../src/Typography.css';
import '../src/Accessibility.css';
import '../src/index.css';

Object.assign(window, { IS_REACT_ACT_ENVIRONMENT: true });

const container = document.getElementById('root');
const result = document.getElementById('test-results');
let checks = 0;

function assert(condition, message) {
  if (!condition) throw new Error(message);
  checks += 1;
}

function get(selector) {
  const element = container.querySelector(selector);
  if (!element) throw new Error(`요소를 찾을 수 없습니다: ${selector}`);
  return element;
}

function click(selector) {
  act(() => get(selector).click());
}

try {
  act(() => createRoot(container).render(createElement(StrictMode, null, createElement(App))));

  const dialog = get('dialog');
  const close = get('[aria-label="홍보 팝업 닫기"]');
  assert(dialog.open && dialog.matches(':modal'), '홍보 팝업은 모달로 열려야 합니다');
  assert(dialog.contains(document.activeElement) && document.activeElement === close, '팝업이 열리면 닫기 버튼에 포커스해야 합니다');
  assert(get(`#${dialog.getAttribute('aria-labelledby')}`).textContent.includes('A11Y AIRLINE 앱'), '팝업의 제목이 연결되어야 합니다');
  assert(get(`#${dialog.getAttribute('aria-describedby')}`).textContent.includes('체크인'), '팝업의 설명이 연결되어야 합니다');
  const action = dialog.querySelector('button:last-child');
  act(() => action.focus());
  const forwardTab = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true });
  act(() => action.dispatchEvent(forwardTab));
  assert(forwardTab.defaultPrevented && document.activeElement === close, '마지막 버튼에서 Tab을 누르면 첫 버튼으로 이동해야 합니다');
  const backwardTab = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true, cancelable: true });
  act(() => close.dispatchEvent(backwardTab));
  assert(backwardTab.defaultPrevented && document.activeElement === action, '첫 버튼에서 Shift+Tab을 누르면 마지막 버튼으로 이동해야 합니다');
  act(() => close.focus());
  act(() => get('main').focus());
  assert(document.activeElement === close, '모달이 열려 있으면 배경으로 포커스를 이동할 수 없어야 합니다');
  click('#promotion-title');
  assert(dialog.open, '팝업 내부를 클릭해도 닫히지 않아야 합니다');

  const closed = new Promise((resolve) => dialog.addEventListener('close', resolve, { once: true }));
  click('[aria-label="홍보 팝업 닫기"]');
  await closed;
  assert(!dialog.open && getComputedStyle(dialog).display === 'none', '닫기 버튼으로 팝업을 숨겨야 합니다');
  assert(document.activeElement === get('main'), '팝업을 닫으면 본문에 포커스해야 합니다');

  act(() => dialog.showModal());
  const backdropClosed = new Promise((resolve) => dialog.addEventListener('close', resolve, { once: true }));
  click('dialog');
  await backdropClosed;
  assert(!dialog.open, '팝업 바깥 영역을 클릭하면 닫혀야 합니다');

  assert(container.querySelectorAll('h1').length === 1, '문서의 h1은 하나여야 합니다');
  assert(container.querySelectorAll('header, main, footer').length === 3, '문서의 주요 영역이 필요합니다');
  assert(get('.skip-link').hash === '#main-content', '본문 바로가기가 본문을 가리켜야 합니다');
  assert(get('main').tabIndex === -1, '본문 바로가기로 본문에 포커스할 수 있어야 합니다');
  assert(container.querySelectorAll('img:not([alt])').length === 0, '이미지의 대체 텍스트가 필요합니다');

  const carousel = get('[aria-live="polite"]');
  const next = '[aria-label="다음 여행 상품"]';
  const previous = '[aria-label="이전 여행 상품"]';
  const products = [
    ['두바이', '1,121,600', 'OverseasList?TOURTYP=KALPAK'],
    ['바르셀로나', '1,515,200', 'pkgpnh=KP44129'],
    ['로마', '1,415,800', 'pkgpnh=KP41216']
  ];

  assert(carousel.getAttribute('aria-atomic') === 'true', '전환 시 상품 정보를 한 번에 안내해야 합니다');
  act(() => get(next).focus());

  for (let index = 0; index < products.length; index += 1) {
    const [destination, price, link] = products[index];
    const card = carousel.querySelector('a');
    assert(carousel.querySelectorAll('a').length === 1, '현재 상품만 탐색할 수 있어야 합니다');
    assert(
      card.getAttribute('aria-label') === `3개 중 ${index + 1}번째, 서울/인천에서 ${destination}, 일반석 왕복, ${price}원, 새 창에서 열기`,
      '상품 순서, 전체 개수, 노선, 좌석, 가격, 새 창 안내가 함께 있어야 합니다'
    );
    assert(card.href.includes(link), '각 상품이 해당 상품의 링크로 연결되어야 합니다');
    assert(card.target === '_blank' && card.relList.contains('noopener'), '상품 링크는 새 창에서 안전하게 열려야 합니다');
    click(next);
    assert(document.activeElement === get(next), '전환 후 조작 버튼의 포커스를 유지해야 합니다');
  }

  assert(carousel.querySelector('a').getAttribute('aria-label').includes('1번째'), '마지막 다음은 첫 상품이어야 합니다');
  click(previous);
  assert(carousel.querySelector('a').getAttribute('aria-label').includes('3번째'), '첫 상품 이전은 마지막 상품이어야 합니다');
  click(next);

  const decrease = '[aria-label="성인 승객 감소"]';
  const increase = '[aria-label="성인 승객 증가"]';
  const alert = get('[role="alert"]');
  click(decrease);
  assert(get('output').value === '1명' && alert.textContent.includes('최소 1명'), '최소 인원 제한을 안내해야 합니다');
  click(increase);
  assert(get('output').value === '2명' && alert.textContent.trim() === '', '인원 변경 시 이전 경고를 지워야 합니다');
  click(increase);
  click(increase);
  assert(get('output').value === '3명' && alert.textContent.includes('최대 승객 수'), '최대 인원 제한을 안내해야 합니다');
  click(decrease);
  click(decrease);
  assert(get('[role="alert"]') === alert, '변경 안내 영역이 미리 존재해야 합니다');

  const help = get('[aria-label="성인 승객 수 안내"]');
  const tooltip = get('#passenger-help');
  act(() => help.focus());
  assert(!tooltip.hidden && help.getAttribute('aria-describedby') === tooltip.id, '포커스하면 연결된 도움말을 보여야 합니다');
  act(() => help.click());
  assert(!tooltip.hidden, '도움말을 클릭해도 내용이 표시되어야 합니다');
  act(() => help.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })));
  assert(tooltip.hidden, 'Escape로 도움말을 닫을 수 있어야 합니다');

  const toggle = '[aria-controls="main-nav"]';
  assert(get(toggle).getAttribute('aria-expanded') === 'false', '메뉴의 닫힌 상태를 전달해야 합니다');
  click(toggle);
  assert(get(toggle).getAttribute('aria-expanded') === 'true', '메뉴의 열린 상태를 전달해야 합니다');
  click('summary');
  assert(get('details').open, '하위 메뉴는 기본 disclosure로 열 수 있어야 합니다');
  click('summary');
  assert(!get('details').open, '하위 메뉴를 다시 닫을 수 있어야 합니다');
  click(toggle);

  result.textContent = `${checks}개 검증 통과`;
  result.dataset.result = 'passed';
} catch (error) {
  result.textContent = `검증 실패: ${error.message}`;
  result.dataset.result = 'failed';
  throw error;
}
