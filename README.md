# KHouseHold Research — 웹사이트

## Project Overview
- **Name**: webapp (KHouseHold Research Portfolio)
- **Goal**: 가구와 IoT 기술을 접목해 "사람과 소통하는 가구"를 연구하는 KHouseHold의 연구 포트폴리오 랜딩페이지. 디자인 핸드오프(SB-Git `designer2-0c8ddf55-…`)의 **v2 Warm 디자인 시스템** (walnut + terracotta + cream, KENZY Living Lab 포함)을 Hono + Cloudflare Pages 스택으로 구현.
- **Features**:
  - 고정 헤더 + IntersectionObserver 기반 활성 섹션 동기화
  - Hero (세리프 헤드라인 + Signal-to-state 리서치 다이어그램 + privacy boundary)
  - 가구 실사 이미지 밴드 (텔레메트리 캡션 오버레이)
  - Living Lab · KENZY 케이스 스터디 (zone overlay 이미지 2장, facts, legend, field notes)
  - Vision / Now(Experiments) / Programs / Methods(다크 테이블) / Evidence / Roadmap / Collaboration / Footer
  - 협력 문구 클립보드 복사 + 토스트, 모바일 오버레이 메뉴 (Escape/리사이즈 자동 닫힘)
  - `prefers-reduced-motion` 준수, 키보드 접근성 (skip link, focus-visible clay outline)

## URLs
- **Sandbox Dev**: https://3000-i0v56qvtifnc8kx233dvc-583b4d74.sandbox.novita.ai
- **Production**: (미배포 — 배포 경로 확정 후 업데이트)

## Design System (v2 Warm)
- **팔레트**: walnut `#3B2A1E` · clay `#C86A4A` · cream `#F4EEE4` · bone `#FAF6EE` · ink `#2A1F17`
- **시그니처 액센트**: Deep Teal `#108474` (IoT signal 전용, 극소량) · Brass `#B08856` (프리미엄 헤어라인)
- **타이포**: Pretendard Variable (로컬 번들, 본문/UI) + Noto Serif KR (CDN, 헤드라인)
- **원칙**: 그림자·그라디언트·이모지·아이콘 금지, 룰선 + 색 슬랩으로만 계층 표현
- 토큰 정본: `public/static/tokens.css` (핸드오프 `colors_and_type.v2.css` 이식)

## Data Architecture
- **Data Models**: 정적 콘텐츠 페이지 — `src/data.ts`에 PROGRAMS / WORK / TECH_ROWS / OUTCOMES / ROADMAP / PRINCIPLES / FLOW_STAGES 상수로 하드코딩 (CMS 이관 시 그대로 JSON 추출 가능)
- **Storage Services**: 없음 (완전 정적, 데이터 페칭 없음)
- **UI State**: activeSection / menuOpen / toast — `public/static/app.js`에서 순수 JS로 관리

## Project Structure
```
webapp/
├── src/
│   ├── index.tsx        # Hono 앱 엔트리 (페이지 조립)
│   ├── renderer.tsx     # HTML 셸 (head, 폰트 preload, CSS/JS 링크)
│   ├── components.tsx   # 섹션별 Hono JSX 컴포넌트 (SSR)
│   └── data.ts          # 콘텐츠 상수
├── public/static/
│   ├── tokens.css       # 디자인 토큰 (v2 warm)
│   ├── site.css         # 컴포넌트 스타일
│   ├── app.js           # 인터랙션 (nav observer, 메뉴, 클립보드, 토스트)
│   ├── assets/          # 로고 SVG, 파비콘, KENZY/가구 이미지
│   └── fonts/           # PretendardVariable.woff2
├── ecosystem.config.cjs # PM2 설정
└── wrangler.jsonc       # Cloudflare Pages 설정
```

## User Guide
- 상단 네비게이션으로 각 섹션(Living Lab, Vision, Now, Programs, Methods, Roadmap, Collaboration)으로 이동합니다. 스크롤 위치에 따라 활성 링크가 자동 표시됩니다.
- Collaboration 섹션에서 **이메일 초안 열기**(mailto) 또는 **문의 문구 복사**(클립보드 + 토스트)를 사용할 수 있습니다.
- 모바일(≤820px)에서는 햄버거 버튼으로 오버레이 메뉴를 엽니다.

## Development
```bash
npm run build                      # vite build → dist/
pm2 start ecosystem.config.cjs     # wrangler pages dev dist (port 3000)
curl http://localhost:3000         # 확인
```

## Deployment
- **Platform**: Cloudflare Pages (미배포)
- **Status**: ✅ 샌드박스 dev 서버 동작 중
- **Tech Stack**: Hono + TypeScript (JSX SSR) + Vanilla CSS/JS + Cloudflare Pages
- **Last Updated**: 2026-08-31

## Not Yet Implemented / Next Steps
- 프로덕션 배포 (Genspark 호스티드 또는 사용자 Cloudflare 계정)
- 이메일 mailto 링크에 실제 KHouseHold 대표 주소 연결
- (핸드오프 권장) KENZY zone overlay를 정지 JPG 대신 실시간 SVG 레이어로 재구현 — 실제 센서 데이터 연동 시
- zone map의 fake telemetry(18ms, 15Hz, rev.03)는 실배포 전 실측 값으로 교체 필요
