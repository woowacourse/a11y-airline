# 구현 TODO

> 근거: [requirements.md](./requirements.md), 현재 코드(`src/`) 기준으로 정리

## 0. 준비

- [x] `package.json`의 `"homepage"`에 들어 있는 `{username}`을 본인 GitHub 아이디로 수정
- [x] 개선 전 상태를 스크린 리더로 녹화 (**before 영상**)

## 1. 이미지 캐로셀 (`src/components/TravelSection.tsx`)

- [x] 이전/다음 버튼에 이름 부여 ("이전 여행 상품" / "다음 여행 상품")
- [x] 카드를 `div` + `onClick`(`window.open`) 대신 `a href`로 변경 → "링크"로 읽히고 키보드로도 이동 가능
  - [x] 새 탭으로 열 경우 `target="_blank"` + `rel="noopener noreferrer"`, 새 탭으로 열린다는 사실 안내 여부 결정
  - [x] `handleCardClick` 제거
- [x] 카드 한 장의 정보(여행지·좌석 유형·가격)가 한 번에 읽히도록 구성
  - [x] "서울/인천 - 두바이"의 `-`가 "에서"처럼 의미 있게 읽히도록 처리
  - [x] "KRW 1,121,600"이 "1,121,600원"처럼 자연스럽게 읽히도록 처리
  - [x] 카드 이미지 `alt` 결정 (정보가 텍스트에 이미 있으면 `alt=""`)
- [x] 전체 개수 / 현재 위치 안내 ("3개 중 1번째")
- [x] 이전/다음 버튼을 누르면 바뀐 아이템 정보가 읽히도록 처리 (라이브 리전 `aria-live="polite"` 등)
- [x] 보이지 않는 카드가 스크린 리더에 노출되지 않는지 확인 (현재 `.cardActive`만 `display: block`)

## 2. 페이지 구조 (`index.html`, `src/App.tsx`)

- [x] `<title>` "React App" → 페이지 내용을 설명하는 제목으로 변경
- [x] 시맨틱 태그로 주요 영역 구분
  - [x] 상단(내비게이션 + 사이트 소개) → `header`
  - [x] `#main-content` → `main`
  - [x] 항공권 예매 / 여행 상품 → 각각 `section`
  - [x] 하단 → `footer`
- [x] 헤딩 순서 정리
  - [x] `h1`은 "A11Y AIRLINE" 하나만 유지
  - [x] "지금 떠나기 좋은 여행" `h1` → `h2`
  - [x] 캐로셀 카드 제목(`p.heading-3-text`)을 `h3`로 할지 결정
- [x] skip link: 페이지 최상단에 `<a href="#main-content">본문으로 바로가기</a>` 추가
  - [x] 평소엔 숨기고 포커스를 받으면 보이도록 스타일 추가
  - [x] 이동 후 포커스가 본문으로 실제로 옮겨지는지 확인 (필요하면 `main`에 `tabIndex={-1}`)

## 3. 페이지 점검 중 발견한 추가 개선 후보

- [x] `Navigation`: 메뉴 토글 버튼에 `aria-expanded`, `aria-controls="main-nav"` 추가
- [x] `FlightBooking`: 도움말 툴팁이 마우스 hover로만 열림 → 키보드·스크린 리더로도 내용을 확인할 수 있게 개선

## 4. (선택) 팝업 모달 포커스 트랩 (`src/components/PromotionModal.tsx`)

- [x] `App.tsx`에서 `PromotionModal` 주석 해제
- [x] 네이티브 `<dialog>` + `showModal()` 사용 검토 (배경 inert 처리, `Esc`로 닫기를 기본 제공)
  - [x] 직접 구현한다면 `role="dialog"`, `aria-modal="true"`, `aria-labelledby`(모달 제목) 지정
- [x] 열릴 때 포커스를 모달 안으로 이동
- [x] 열려 있는 동안 `Tab`/`Shift+Tab` 포커스가 모달 안에서만 순환
- [x] 닫기 버튼 `img`에 대체 텍스트 추가 (현재 `alt` 없음) → "닫기"로 읽히게
- [x] `Esc`로 닫기
- [x] 닫힐 때 원래 포커스 위치로 복귀

## 5. 검증 & 제출

- [x] 키보드만으로 skip link → 본문 → 캐로셀 → 카드 링크 이동 확인
- [x] `npm run lint`, `npm run build` 통과
- [x] `npm run deploy`로 GitHub Pages 배포
- [x] 개선 후 스크린 리더 녹화 (**after 영상**)
- [x] PR 템플릿 작성
  - [x] 배포 URL, before/after 영상
  - [x] 요구사항별 고민·개선 내용
  - [x] 우리 팀 접근성 체크리스트 v1 (주요 플로우 1개 → 단계별 질문 → 체크리스트 항목)
