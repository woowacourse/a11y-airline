# 우리 팀의 접근성 리포트: Knot 녹음 문서 읽기

> 작성: 2026-11-01 (일), 도넛
> 팀 서비스: Knot. 아래 코드 경로와 브랜치는 모두 Knot 저장소 기준이다.
> 이 저장소에서 쓰는 곳: PR의 「우리 팀의 접근성 체크리스트 v1」 항목 ([requirements.md](./requirements.md))
> 요구사항: FE 요구사항 11번 「웹 접근성 개선」, LMS+ missions/54 팀 미션 「서비스 접근성 개선하기」
> 개선 코드: 브랜치 `temp-a11y` `a82d332ab` (develop `c5428e58a` 위 커밋 1개, PR 없음)
> 앞선 리포트: 「Knot 웹 접근성 개선 리포트」 (가입부터 녹음 문서 읽기까지 8단계를 다룬 판)
> 진행 상태: 1~4장은 브랜치의 코드와 테스트로 채웠다. Lighthouse, axe, VoiceOver 칸(「측정 필요」, 「확인 필요」)과 before/after 영상은 아직 비어 있다.

앞선 리포트는 8단계 플로우 전체를 다뤘지만, 이번 리포트는 범위를 녹음 문서 읽기 화면 하나로 좁혔다. 같은 브랜치에 있는 녹음 화면 개선(녹음 상태 낭독, 녹음 시간 이름)과 가입 화면 제목은 이 리포트에서 다루지 않는다.

## 1. 서비스의 주요 영역: 녹음 문서 읽기

### 1-1. 고른 이유

- Knot 사용자는 회의를 녹음한 뒤 정리된 문서를 읽으려고 서비스를 쓴다. 녹음 문서 화면은 그 결과를 받아 보는 화면이고, 10/28 팀 회의에서 세운 퍼널의 마지막 단계(문서 열기, 문서를 30초 넘게 읽기)도 이 화면에서 일어난다.
- 화면을 볼 수 없는 사용자는 긴 문서를 헤딩으로 건너뛰며 읽는다. 이 화면은 회의 요약과 문서 목록처럼 구역이 많아서, 헤딩과 랜드마크 구조의 문제가 다른 화면보다 크게 드러난다.

### 1-2. 화면 구성

| 항목 | 내용 |
| --- | --- |
| 주소 | `/workspace/:workspaceId/recordings/:recordingId/document` |
| 페이지 | `pages/workspace/[workspaceId]/recordings/[recordingId]/document` |
| 주요 컴포넌트 | `widgets/recording/RecordingDocumentViewer`, `primitives/ui/DocumentBody`, `features/document/MeetingDocumentList`, `features/recording/RecordingAudioPlayer`, `widgets/document/TranscriptPanel` (오른쪽 원문 패널) |
| 레이아웃 | `pages/_layout/WorkspaceLayout` (GNB, 사이드바, 본문 `main`, 하단 독) |
| 들어오는 길 | 홈 녹음 기록의 「녹음 보기」(`RecordingHistoryRow`), 문서 탭 「녹음별」 목록(`RecordingDocumentList`), 문서 화면의 「이 문서가 나온 녹음」(`SourceRecording`) |

화면에는 위에서부터 녹음 제목, 녹음한 날과 녹음 길이, 녹음 음성 플레이어, 회의 전체 요약, 구분선, 「이 회의에서 나온 문서」 목록이 한 열로 놓이고, 오른쪽에 전사 원문 패널이 열린다.

| 사용자가 할 일 | 화면을 볼 수 없는 사용자가 하는 방법 |
| --- | --- |
| 어느 녹음의 문서인지 알기 | 화면 제목과 녹음 제목을 듣는다 |
| 회의 요약을 훑기 | 헤딩 목록(VoiceOver 로터)으로 「한눈에 보기」, 주제별 구역을 오간다 |
| 이 회의에서 나온 문서로 가기 | 헤딩이나 랜드마크로 목록 구역에 간 뒤 문서 카드를 고른다 |

## 2. 접근성 문제 정의

### 2-1. 이 화면에 맞춘 체크리스트

팀 체크리스트 v1(WCAG 2.1 A 레벨 10개 항목)에서 이 화면과 관련된 항목만 남기고 질문을 화면에 맞췄다. 색 대비는 AA 기준이지만 홈 화면 Lighthouse에서 실패한 유일한 검사라서 함께 넣었다.

| 번호 | 질문 | WCAG |
| --- | --- | --- |
| 1 | 녹음 제목이 `h1`이고, 요약과 문서 목록의 헤딩이 단계를 건너뛰지 않고 내려가는가? | 1.3.1 |
| 2 | GNB를 건너뛰고 본문으로 바로 갈 수 있는가? | 2.4.1 |
| 3 | 브라우저 탭과 낭독기가 이 화면을 「녹음 문서」로 알려 주는가? | 2.4.2 |
| 4 | 헤딩 문구가 각 구역의 목적을 설명하는가? | 2.4.6 |
| 5 | 다른 화면에서 이 화면으로 옮겨 왔을 때, 포커스 이동 없이도 새 화면에 왔다고 읽어 주는가? | 4.1.3 |
| 6 | 날짜, 안내 문구, 번호처럼 흐리게 그린 글자도 배경과 4.5:1 이상 대비가 나는가? | 1.4.3 (AA) |

### 2-2. 이미 갖춘 것

- 녹음 문서 섹션은 `section`이고 녹음 제목을 `aria-labelledby`로 이름 삼아, 랜드마크 목록에서 녹음 제목으로 보인다.
- 「이 회의에서 나온 문서」도 제목을 이름으로 가진 구역(`region`)이다.
- 불러오는 동안에는 섹션에 `aria-busy="true"`와 「녹음 문서를 불러오고 있어요」 이름이 붙고, 불러오기에 실패하면 안내가 `role="alert"`로 읽힌다.
- 녹음한 날은 `<time dateTime>`으로 그린다.
- 레이아웃은 본문을 `main`으로 감싼다.

### 2-3. 찾은 문제

develop `c5428e58a`의 코드에서 찾았다.

| 문제 | 내용 | 위치 | WCAG |
| --- | --- | --- | --- |
| 가. 헤딩 구조 | 녹음 제목이 `h2`라 화면에 `h1`이 없다. `DocumentBody`는 마크다운 `#`을 `h3`부터 매기는데 실제 요약은 `##`부터 써서(요약 양식 첫 줄이 `## 한눈에 보기`) `h2` 바로 아래가 `h4`가 되어 `h3`을 건너뛴다 | `RecordingDocumentViewer`, `DocumentBody/ui/Block.tsx` | 1.3.1, 2.4.6 |
| 나. 화면 제목 | `index.html`의 `<title>knot</title>`만 있어서 이 화면도 「knot」으로 읽힌다 | `frontend/index.html` | 2.4.2 |
| 다. 화면 이동 안내 | SPA라 홈에서 「녹음 보기」를 눌러 이 화면으로 와도 페이지를 새로 불러오지 않는다. 포커스도 옮기지 않고 이동을 알리는 영역도 없어서, 낭독기는 화면이 바뀐 것을 알리지 않는다 | `App.tsx`, `WorkspaceLayout` | 4.1.3 |
| 라. 본문 바로가기 | 건너뛰기 링크가 없고 GNB가 `main` 앞에 있어서, 키보드 사용자는 GNB를 지나야 본문에 들어간다 | `WorkspaceLayout` | 2.4.1 |
| 마. 색 대비 | 날짜, 안내 문구, 번호 같은 글자 9곳이 `neutral[500]`(#8C8880)이라 흰 배경 대비 3.53:1, `neutral[50]` 배경 3.36:1로 4.5:1에 못 미친다 | 아래 4-5절 표 | 1.4.3 (AA) |

before 헤딩 구조 (완료 상태, mock 요약 기준, 일부):

```text
(h1 없음)
h2 녹음 제목
  h4 한눈에 보기            ← h3을 건너뜀
    h5 정한 방향
    h5 아직 결정하지 못한 것
  h4 1. 회원 탈퇴 정책
  h4 2. 홈 화면 개편
  h3 이 회의에서 나온 문서
```

### 2-4. before 측정

| 항목 | 결과 |
| --- | --- |
| Lighthouse 접근성 점수 | 측정 필요 (참고: 10/28 홈 화면은 96점, 실패는 `color-contrast`뿐) |
| Lighthouse `heading-order` | 측정 필요 (`h2` 다음 `h4`라 실패할 것으로 본다) |
| Lighthouse `color-contrast` | 측정 필요 (2-3절 마의 9곳) |
| axe 위반 개수 | 측정 필요 |
| Mac VoiceOver 로터 헤딩 목록 | 캡처 필요 |
| iPhone VoiceOver로 홈에서 이 화면까지 가서 요약 훑기 | 확인 필요 (완료 가능, 정보의 명확성, 키보드 수행을 O, △, X로 적고 읽은 문장 기록) |

측정 방법은 앞선 리포트와 같다. 운영 주소에서 Chrome DevTools Lighthouse(데스크톱)와 axe DevTools로 재고, before와 after를 같은 주소, 같은 녹음으로 잰다.

### 2-5. before 영상

- 촬영 필요: iPhone 화면 기록(VoiceOver 음성 포함)으로 홈 「녹음 보기」부터 요약을 헤딩으로 훑어 「이 회의에서 나온 문서」까지 가는 과정
- 촬영 필요: Mac VoiceOver 캡션 패널을 켠 채 같은 과정

## 3. 개선 계획

분류 번호는 우선순위 선정 워크숍 기준이다 (1 스크린 리더로 쓸 수는 있게, 2 더 명확한 정보를 주게, 3 키보드만으로 쓸 수 있게).

| 순서 | 개선 | 문제 | 분류 | 영향력 | 난도 | 방법 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 화면 이동 뒤 새 화면 알리기 | 다 | 1 | 큼 | 중간 | 경로가 바뀌면 새 화면의 `<title>`을 화면에 보이지 않는 `role="status"` 영역에 적는다 |
| 2 | 화면 제목 주기 | 나 | 2 | 중간 | 낮음 | 페이지 컴포넌트에 `<title>녹음 문서 - knot</title>`을 그린다 (React 19가 `head`로 올린다) |
| 3 | 헤딩 구조 맞추기 | 가 | 2 | 큼 | 낮음 | 녹음 제목을 `h1`로 올리고, 요약 앞에 숨긴 `h2`를 두고, 마크다운 헤딩을 한 단계씩 올린다 |
| 4 | 본문으로 바로가기 | 라 | 3 | 중간 | 낮음 | GNB 앞에 `<a href="#main">본문으로 바로가기</a>`를 두고 `main`에 `id`를 준다 |
| 5 | 색 대비 맞추기 | 마 | 2 | 중간 | 낮음 | 글자로 쓴 `neutral[500]`만 `neutral[600]`(#6B6862)으로 바꾼다 |

- 1번은 2번이 만든 제목을 읽어 주므로 작업은 2번을 먼저 했다.
- HTML 기본 기능으로 되는 곳(`title`, `h1`, `a`, `main`)에는 ARIA를 쓰지 않고, HTML만으로 알릴 수 없는 화면 이동 안내에만 `role="status"`를 쓴다.

## 4. 개선 과정

### 4-1. 화면 이동 뒤 새 화면 알리기 (다)

#### 두 방법 비교

| | 포커스 이동 (새 화면의 `h1`이나 `main`으로) | 라이브 리전 (새 화면 제목을 상태 영역에 적기) |
| --- | --- | --- |
| 낭독 | 포커스를 받은 요소를 읽는다. `main`이면 본문을 길게 읽을 수 있다 | 화면 제목만 읽는다 |
| 독과의 관계 | 하단 독은 한글 입력기가 첫 글자부터 조립하도록 커서를 늘 입력창에 둔다(`useKeepFieldFocused`). 화면을 옮길 때마다 커서를 본문으로 빼면 그 뒤에 친 한글이 「ㅇㅏ녕」처럼 갈라진다 | 커서를 건드리지 않는다 |
| 바꿔야 할 것 | `main`에 `tabIndex={-1}`을 붙여야 하는데, 그러면 본문 빈 곳을 눌러도 커서가 `main`에 머물러 독이 커서를 입력창으로 되돌리지 못한다 | 화면에 보이지 않는 영역 하나만 더한다 |

독의 한글 입력을 깨지 않으려고 라이브 리전 방식을 골랐다. 본문으로 옮겨 가는 일은 4-3의 `h1`과 4-4의 바로가기가 돕는다.

#### 바꾼 내용

```tsx
// shared/components/composites/RouteAnnouncer (새로 만듦)
export default function RouteAnnouncer() {
  const { pathname } = useLocation();
  const [message, setMessage] = useState("");
  const previousPathnameRef = useRef(pathname);

  useEffect(() => {
    if (previousPathnameRef.current === pathname) return;
    previousPathnameRef.current = pathname;

    const announceTitle = () => setMessage(document.title);
    announceTitle();

    const observer = new MutationObserver(announceTitle);
    observer.observe(document.head, { childList: true, subtree: true, characterData: true });

    return () => observer.disconnect();
  }, [pathname]);

  return <VisuallyHidden role="status">{message}</VisuallyHidden>;
}
```

```tsx
// App.tsx — before
const App = () => {
  return useSentryRoutes(routes);
};

// App.tsx — after
const App = () => {
  const element = useSentryRoutes(routes);

  return (
    <>
      {element}
      <RouteAnnouncer />
    </>
  );
};
```

- `role="status"`는 `aria-live="polite"`라서 읽던 문장을 끊지 않는다. 화면 이동은 사용자가 누른 결과라 끊을 만큼 급하지 않다고 봤다.
- 처음 들어온 화면은 낭독기가 페이지 제목을 스스로 읽으므로 적지 않는다.
- 이 화면은 원문 패널을 여닫을 때 쿼리만 바뀐다. 경로(`pathname`)가 같으면 같은 화면이라 적지 않는다.
- 새 화면이 제목을 늦게 그리는 경우를 따라가려고 `head`의 변화를 지켜본다. 같은 글자로 바뀌면 React가 다시 그리지 않으므로 스타일이 붙을 때마다 다시 읽지는 않는다.
- 화면에 보이지 않는 글자는 랜딩 `SceneLayer.tsx`에만 있던 스타일을 `primitives/ui/VisuallyHidden`으로 꺼내 썼다. 4-3에서도 같은 컴포넌트를 쓴다.

#### 테스트

`RouteAnnouncer` 통합 테스트 4건을 먼저 쓰고 실패(컴포넌트 없음)를 확인한 뒤 구현했다 (10/28 작업 기록).

| 테스트 | 확인하는 것 |
| --- | --- |
| 처음 들어온 화면의 제목은 적지 않는다 | 첫 화면에서 상태 영역이 비어 있다 |
| 화면을 옮기면 새 화면의 제목을 적는다 | 화면을 옮길 때마다 새 제목을 적는다 |
| 쿼리만 바뀌면 적지 않는다 | `/home` → `/home?messageId=1`에서 비어 있다 |
| 새 화면이 늦게 제목을 그리면 그 제목을 적는다 | 그려진 뒤 제목을 적는다 |

#### VoiceOver 확인

| 동작 | 기대하는 낭독 | before | after |
| --- | --- | --- | --- |
| 홈 녹음 기록에서 「녹음 보기」 누르기 | 「녹음 문서 - knot」 | 확인 필요 | 확인 필요 |
| 문서 탭 「녹음별」에서 녹음 고르기 | 「녹음 문서 - knot」 | 확인 필요 | 확인 필요 |
| 이 화면에서 원문 패널 여닫기 (쿼리만 바뀜) | 읽지 않음 | 확인 필요 | 확인 필요 |

누른 링크의 이름과 겹쳐 화면 제목이 밀리거나 빠지면 `aria-live="assertive"`로 바꿔 한 번 더 비교한다.

### 4-2. 화면 제목 주기 (나)

#### 바꾼 내용

```tsx
// pages/workspace/[workspaceId]/recordings/[recordingId]/document — before
export default function RecordingDocumentPage() {
  return (
    <Root>
      <RecordingDocumentViewer />
    </Root>
  );
}

// after
export default function RecordingDocumentPage() {
  return (
    <Root>
      <title>녹음 문서 - knot</title>
      <RecordingDocumentViewer />
    </Root>
  );
}
```

- React 19는 컴포넌트 안의 `<title>`을 `head`로 올려 주므로 라이브러리를 더하지 않았다. 화면을 떠나면 React가 그 `<title>`을 지운다.
- `<title>`은 `head`로 올라가서 본문 레이아웃에는 자리를 차지하지 않는다.
- 회의 제목을 넣으면 탭에서 구분하기 쉬워지지만, 회의 제목은 데이터를 받은 뒤에 생겨서 이번에는 고정 문구로 두고 다음 과제로 남긴다.

| 확인 | before | after |
| --- | --- | --- |
| 브라우저 탭 이름 | knot | 녹음 문서 - knot |
| 이 화면에서 새로고침 뒤 VoiceOver 첫 낭독 | 「knot」 | 확인 필요 |
| Lighthouse `document-title` | 통과 (`<title>`이 있는지만 본다) | 통과 (점수는 바뀌지 않는다) |

### 4-3. 헤딩 구조 맞추기 (가)

#### 바뀐 헤딩 구조 (완료 상태, mock 요약 기준, 일부)

```text
before                                   after
(h1 없음)                                h1 녹음 제목
h2 녹음 제목                               h2 회의 전체 요약 (화면에 안 보임)
  h4 한눈에 보기          ← h3 건너뜀          h3 한눈에 보기
    h5 정한 방향                                h4 정한 방향
    h5 아직 결정하지 못한 것                     h4 아직 결정하지 못한 것
  h4 1. 회원 탈퇴 정책                          h3 1. 회원 탈퇴 정책
  h4 2. 홈 화면 개편                            h3 2. 홈 화면 개편
  h3 이 회의에서 나온 문서                    h2 이 회의에서 나온 문서
```

| 처리 상태 | before | after |
| --- | --- | --- |
| 완료, 문서 생성 실패 | 위 그림 | 위 그림 |
| 정리 중, 전사 실패, 주제 분류 실패, 정리할 내용 없음 | h2 녹음 제목 → h3 상태 안내 | h1 녹음 제목 → h2 상태 안내 |
| 녹음을 불러오지 못함 | h2 「녹음을 불러오지 못했어요」 (h1 없음) | h1 「녹음을 불러오지 못했어요」 |

#### 바꾼 내용

| 파일 | before | after |
| --- | --- | --- |
| `RecordingDocumentViewer` 녹음 제목 | `h2` | `h1` |
| `RecordingDocumentViewer` 회의 전체 요약 앞 | 없음 | `<VisuallyHidden as="h2">회의 전체 요약</VisuallyHidden>` |
| `RecordingDocumentViewer/ui/StateMessage` 상태 안내 제목 | `h3` | `h2` |
| `RecordingDocumentViewer/ui/RecordingDocumentLoadFailed` 제목 | `h2` | `h1` |
| `MeetingDocumentList` 「이 회의에서 나온 문서」 | `h3` | `h2` |
| `DocumentBody/ui/Block` 마크다운 `#`, `##`, `###` | `h3`, `h4`, `h5` | `h2`, `h3`, `h4` |

```tsx
// RecordingDocumentViewer — after
{hasDocuments && (
  <>
    {/* 시안에는 요약 제목이 없지만, 요약 본문의 구역 제목이 녹음 제목(h1) 아래에서 단계를 건너뛰지 않게 낭독기용 제목을 둬요 */}
    <VisuallyHidden as="h2">회의 전체 요약</VisuallyHidden>
    <MeetingSummary ... />
    <Divider />
    <MeetingDocumentList />
  </>
)}

// DocumentBody/ui/Block.tsx — before → after
const HEADING_TAG = {
  1: "h3",  // → "h2"
  2: "h4",  // → "h3"
  3: "h5",  // → "h4"
} as const satisfies Record<MarkdownHeadingLevel, string>;
```

- 시안에 요약 제목이 없어서 보이는 제목을 더하지 않고 숨긴 `h2`를 두었다. VoiceOver 로터의 헤딩 목록에서 「회의 전체 요약」과 「이 회의에서 나온 문서」가 같은 단계로 나란히 보인다.
- 글자 크기와 굵기는 마크다운 단계로 정해 두어서 태그만 바뀌고 화면 모양은 그대로다.
- `DocumentBody`는 문서 탭의 문서 화면(`DocumentViewer`)도 쓴다. 그 화면도 `h2 문서 제목 → h4 구역`에서 `h2 → h3 구역`으로 바뀌어 단계를 건너뛰지 않게 됐다. 그 화면에 `h1`이 없는 문제는 문서 탭 개편 뒤로 미뤘다.

#### 테스트

`RecordingDocumentViewer` 통합 테스트에 헤딩 단계 검사 1건을 더하고, 기존 검사의 단계를 새 구조에 맞췄다.

```tsx
it("헤딩 단계를 건너뛰지 않도록 녹음 제목은 h1, 회의 전체 요약과 이 회의에서 나온 문서는 h2, 요약의 구역은 그 아래로 둔다", async () => {
  renderViewer();

  expect(await findTitle()).toBeInTheDocument(); // level 1
  expect(screen.getByRole("heading", { level: 2, name: "회의 전체 요약" })).toBeInTheDocument();
  expect(await screen.findByRole("heading", { level: 3, name: "한눈에 보기" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 4, name: "정한 방향" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 2, name: RELATED_HEADING })).toBeInTheDocument();
});
```

- 같이 바꾼 검사: 녹음 제목(`level 2 → 1`), 「이 회의에서 나온 문서」(`level 3 → 2`), 정리 중 안내(`level 2` 추가), 불러오기 실패(`level 1` 제목 검사 추가)
- E2E `recordingDocumentPage.test.ts`와 `documentPage.test.ts`의 녹음 제목 검사도 `level 1`로 바꿨다.

| 시점 | 결과 |
| --- | --- |
| 고치기 전 | 9건 실패 (녹음 제목을 `level 1`로 찾지 못함 등, 10/28 작업 기록) |
| 고친 뒤 | 5-1절 표 |

#### VoiceOver 로터 헤딩 목록

| 확인 | before | after |
| --- | --- | --- |
| Mac VoiceOver 로터 헤딩 목록 캡처 | 캡처 필요 | 캡처 필요 |
| iPhone 로터 「제목」으로 넘기기 | 확인 필요 | 확인 필요 |
| Lighthouse `heading-order` | 측정 필요 | 측정 필요 |

### 4-4. 본문으로 바로가기 (라)

#### 바꾼 내용

```tsx
// WorkspaceLayout — before
<Container>
  <GnbSlot>
    <WorkspaceGnb ... />
  </GnbSlot>
  <Body>
    ...
    <Main ref={mainRef} data-analytics-scroll-root aria-busy={!isReady}>

// after
<Container>
  <SkipLink href={`#${MAIN_ID}`}>본문으로 바로가기</SkipLink>

  <GnbSlot>
    <WorkspaceGnb ... />
  </GnbSlot>
  <Body>
    ...
    <Main ref={mainRef} id={MAIN_ID} data-analytics-scroll-root aria-busy={!isReady}>
```

```tsx
/** 평소에는 화면 위로 밀어 두고, 키보드로 닿으면 왼쪽 위에 내려와 보인다 */
const SkipLink = styled.a`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 40; /* 모달(30) 위 */
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.neutral[900]};
  color: ${({ theme }) => theme.neutral[0]};
  ${({ theme }) => theme.text.label01};
  transform: translateY(-200%);

  &:focus {
    transform: none;
  }
`;
```

- ARIA 없이 `a`와 `id`만 썼다. 링크를 누르면 브라우저가 다음 탭 이동의 시작점을 `main`으로 옮겨, 이어서 탭을 누르면 GNB를 건너뛰고 본문의 첫 버튼(녹음 음성 플레이어나 요약 복사 버튼)으로 간다.
- `display: none`이 아니라 화면 위로 밀어 두기만 해서 탭 순서와 낭독기에는 남는다.
- `main`에 `tabIndex={-1}`은 붙이지 않았다 (4-1과 같은 이유).
- 주소 끝에 `#main`이 붙어도 경로는 같아서 4-1의 화면 이동 안내는 새 화면으로 보지 않는다.

#### 알아 둘 점

워크스페이스 화면에 들어오면 독이 커서를 입력창(DOM 맨 끝)에 둔다. 그래서 들어온 직후 첫 탭은 독 뒤로 나가 브라우저 주소창을 거친 뒤에 바로가기 링크에 닿는다. 바로가기는 GNB나 사이드바를 쓴 뒤 본문으로 돌아갈 때 쓸모가 크다.

#### 테스트

`WorkspaceLayout` 통합 테스트에 1건을 더했다.

```tsx
it("GNB보다 먼저 본문으로 바로가기 링크를 두어, 키보드로 GNB를 건너뛰고 본문으로 갈 수 있다", async () => {
  renderLayout();
  await screen.findByText(HOME_TEXT);

  const skipLink = screen.getByRole("link", { name: "본문으로 바로가기" });
  const main = screen.getByRole("main");

  expect(skipLink).toHaveAttribute("href", `#${main.id}`);
  expect(
    skipLink.compareDocumentPosition(screen.getByRole("banner")) &
      Node.DOCUMENT_POSITION_FOLLOWING,
  ).toBeTruthy();
});
```

#### 키보드와 VoiceOver 확인

| 확인 | 기대 | before | after |
| --- | --- | --- | --- |
| 탭으로 링크에 닿았을 때 화면 | 왼쪽 위에 「본문으로 바로가기」가 보인다 | 링크 없음 | 캡처 필요 |
| 링크에서 Enter 뒤 탭 | GNB를 건너뛰고 본문의 첫 버튼으로 간다 | 링크 없음 | 확인 필요 |
| Mac VoiceOver로 링크 실행 | VoiceOver 커서가 본문으로 옮겨 간다 | 링크 없음 | 확인 필요 |
| Lighthouse `bypass` | 검사 대상이 되면 통과 | 측정 필요 | 측정 필요 |

### 4-5. 색 대비 맞추기 (마)

#### 고른 방법

토큰 `neutral[500]`의 값은 그대로 두고, 글자로 쓴 곳만 `neutral[600]`으로 바꿨다. 토큰 값을 바꾸면 4.5:1을 넘기려고 `#75726B`까지 진해져 `neutral[600]`과 차이가 거의 없어지고, 파티클과 아이콘 같은 장식까지 진해져 Figma 토큰과 어긋난다.

| 글자색 | 흰 배경 `#FFFFFF` | `neutral[50]` `#FAF9F7` |
| --- | --- | --- |
| before `neutral[500]` `#8C8880` | 3.53:1 (실패) | 3.36:1 (실패) |
| after `neutral[600]` `#6B6862` | 5.55:1 | 5.28:1 |

#### 이 화면에서 바꾼 곳

| 위치 | 글자 |
| --- | --- |
| `RecordingDocumentViewer`의 `StartedDate` | 녹음한 날 |
| `MeetingSummary`의 `NoSummaryNotice` | 요약이 없을 때 안내 |
| `MeetingDocumentList`의 `Count` | 「이 회의에서 나온 문서」 옆 개수 |
| `RecordingAudioPlayer`의 `Notice` | 녹음 음성이 없을 때 안내 |
| `DocumentBody/ui/Block`의 `Paragraph` (흐린 문단) | 요약 본문의 흐린 문단 |
| `DocumentBody/ui/Block`의 `ItemNumber` | 번호 목록의 번호 |
| `TranscriptPanel`의 `CreatedDate` | 원문 패널의 날짜 |
| `TranscriptPanel/ui/TranscriptLine`의 `Time` | 발화 시간 |
| `TranscriptPanel`의 `FooterNotice` | 원문 패널 맨 아래 안내 |

```tsx
// 예: RecordingDocumentViewer — before → after
const StartedDate = styled.time`
  ${({ theme }) => theme.text.caption02};
  color: ${({ theme }) => theme.neutral[500]};  // → theme.neutral[600]
`;
```

바꾸지 않은 곳:

| 위치 | 이유 |
| --- | --- |
| `DocumentBody`의 `BulletItem::before` (목록의 점) | 낭독기가 읽지 않게 장식으로 그린 점이다 |
| 문서 카드의 화살표 아이콘 | 글자가 아닌 그래픽이라 1.4.11의 3:1을 적용받고 3.53:1로 통과한다 |

같은 브랜치에서 다른 화면(홈, 녹음 화면, 문서 탭, 탐색, 공통 입력창)의 `neutral[500]` 글자도 함께 바꿨다. 이 리포트 범위 밖이라 표에는 넣지 않았다.

#### 확인

| 확인 | before | after |
| --- | --- | --- |
| Lighthouse `color-contrast` | 측정 필요 | 측정 필요 |
| 테스트 | 색 값만 바꿔서 더하지 않았다 | |

## 5. 개선 후 재측정과 전후 비교

### 5-1. 테스트 (2026-11-01 다시 돌림)

`temp-a11y` `a82d332ab`를 임시 워크트리로 꺼내 관련 단위, 통합 테스트를 돌렸다.

| 대상 | 결과 |
| --- | --- |
| `RecordingDocumentViewer`, `DocumentBody`, `RouteAnnouncer`, `WorkspaceLayout`, `DocumentViewer`, `features/document` | 파일 12개, 317건 모두 통과 |
| E2E (`recordingDocumentPage.test.ts`, `documentPage.test.ts`) | 돌리지 않음 (로컬 3000번 포트를 다른 서버가 쓰고 있어 PR CI에서 확인) |
| `pnpm tsc` | 이번에는 돌리지 않음 (10/28 작업 기록은 통과) |

### 5-2. 자동 검사 전후 비교

| 항목 | before | after |
| --- | --- | --- |
| Lighthouse 접근성 점수 | 측정 필요 | 측정 필요 |
| `heading-order` | 측정 필요 | 측정 필요 |
| `color-contrast` | 측정 필요 | 측정 필요 |
| axe 위반 개수 | 측정 필요 | 측정 필요 |

### 5-3. 스크린 리더 UT 전후 비교

| 할 일 | iPhone before | iPhone after | Mac before | Mac after |
| --- | --- | --- | --- | --- |
| 이 화면에 왔다는 것 알기 | 확인 필요 | 확인 필요 | 확인 필요 | 확인 필요 |
| 녹음 제목 찾기 (헤딩 1단계) | 확인 필요 | 확인 필요 | 확인 필요 | 확인 필요 |
| 요약 구역을 헤딩으로 훑기 | 확인 필요 | 확인 필요 | 확인 필요 | 확인 필요 |
| 「이 회의에서 나온 문서」로 가서 문서 고르기 | 확인 필요 | 확인 필요 | 확인 필요 | 확인 필요 |
| 키보드로 GNB를 건너뛰고 본문에 가기 | 해당 없음 | 해당 없음 | 확인 필요 | 확인 필요 |

### 5-4. before/after 영상

- 촬영 필요: 2-5절과 같은 과정을 같은 순서로 after에서 한 번 더 찍어 before와 나란히 붙인다 (iPhone, Mac).

### 5-5. 체크리스트 결과

| 번호 | 질문 | 코드 기준 | 측정 |
| --- | --- | --- | --- |
| 1 | `h1`과 헤딩 단계 | 충족 (4-3, 테스트로 확인) | 측정 필요 |
| 2 | 본문 바로가기 | 충족 (4-4, 테스트로 확인) | 확인 필요 |
| 3 | 화면 제목 | 충족 (4-2) | 확인 필요 |
| 4 | 헤딩 문구가 목적을 설명 | 「회의 전체 요약」, 「이 회의에서 나온 문서」로 구역을 구분 | 확인 필요 |
| 5 | 화면 이동 안내 | 충족 (4-1, 테스트로 확인) | 확인 필요 |
| 6 | 글자 대비 4.5:1 | 이 화면의 글자 9곳 충족 (4-5) | 측정 필요 |

## 6. 남은 일과 다음 과제

### 6-1. 제출 전에 남은 일

- before 측정과 영상: 개선 전 코드가 배포된 운영 주소에서 재고 찍는다.
- after 측정과 영상: `temp-a11y`의 변경이 배포된 뒤 같은 주소, 같은 녹음으로 재고 찍는다.
- PR: `temp-a11y`에는 이 리포트 범위 밖의 변경(녹음 화면의 녹음 상태 낭독과 녹음 시간 이름, 다른 화면의 제목과 글자색)이 함께 들어 있다. 이 화면만 올리려면 개선마다 브랜치를 나눠 PR을 만들고, 팀 저장소의 `/a11y-review` 스킬로 점검한다.

### 6-2. 다음 과제

- 녹음 문서 화면의 `<title>`에 회의 제목 넣기 (4-2)
- 홈 「녹음 보기」 링크들의 접근 가능한 이름이 모두 같아서 어느 회의의 녹음인지 링크 목록에서 구분하기 어렵다. 이름에 회의 제목 넣기 (WCAG 2.4.9, 이 화면으로 들어오는 길)
- 문서 탭 문서 화면에 `h1` 두기 (문서 탭 개편 뒤)
- 화면 이동 안내가 링크 이름과 겹쳐 빠지면 `aria-live="assertive"`와 비교하기 (4-1)
- 글자색에 `neutral[500]`을 다시 쓰지 않도록 리뷰 체크리스트나 lint에 넣을지 팀과 정하기 (4-5)

## 참고

- 앞선 리포트: 「Knot 웹 접근성 개선 리포트」, 계획서: 「Knot 웹 접근성 개선 계획서」
- 미션 일정과 제출물: Knot 저장소의 `docs/woowacourse-level4/a11y.md`
- 이 저장소의 공부 노트: [a11y-study.md](./a11y-study.md)
