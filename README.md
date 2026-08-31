# KHouseHold Research

## Project Overview
- **Name**: KHouseHold Research (webapp)
- **Goal**: KHouseHold의 생활공간 센싱 연구를 소개하는 **학술 연구 포트폴리오** 사이트. 제품 홍보가 아니라 연구 질문·검증 구조·연구 의존관계를 전달합니다.
- **핵심 흐름**: 센서 신호 수집 → 시간·공간 정합 → 사람의 존재·위치·움직임 해석 → 비접촉 행동·생체 모니터링 확장 → 프라이버시 친화적 디지털 트윈
- **현재 연구 초점**: VL53L5CX ToF + BNO08X IMU의 시간 동기화·자세 보정·좌표 정합·사람 추적 베이스라인

## URLs
- **Sandbox Preview**: https://3000-i0v56qvtifnc8kx233dvc-583b4d74.sandbox.novita.ai
- **Production**: 미배포 (배포 방식 선택 대기 — Genspark 호스팅 vs BYOK Cloudflare)

## 페이지 구조 (단일 페이지, 앵커 내비게이션)
| 섹션 | 앵커 | 내용 |
|---|---|---|
| Hero | `#top` | 브랜드, 연구 비전 한 문장, 현재 연구 초점 카드 |
| 연구 모델 개념도 | `#model` | SENSE → ALIGN → INFER → GOVERN & TRANSLATE 4단계 |
| Research Vision | `#vision` | 연구 철학 + 핵심 연구 질문 4개 |
| Research Agenda | `#agenda` | 3개 트랙 (현재 핵심 / 탐색 / 장기 방향) |
| Current Study | `#current-study` | WP01–WP04 작업 패키지 + 연구 상태 안내 |
| Methods & Technology | `#methods` | 연구 계층 × (현재 기반 / 진행·탐색 / 향후 확장) 표 |
| Research Outputs | `#outputs` | 축적 중인 연구 기반 5건 (상태 배지) |
| Roadmap | `#roadmap` | NOW / NEXT / LATER 타임라인 |
| Collaboration | `#collaboration` | 협력 주제 + 연락처 플레이스홀더 |

## 콘텐츠 원칙 (개편안 준수)
- 확인되지 않은 제품명(KENZY 등), 감지 존 실증 사례, 성능 수치(Δt, Hz, 보관 기간), 알고리즘명, 장비 대시보드 연출 **전부 제거**
- 현재 실험 / 탐색 중 / 향후 확장을 **상태 배지**로 명확히 구분 (teal / amber / gray)
- 프라이버시·엣지 처리는 완성 기능이 아닌 **설계 원칙·검증 대상**으로 서술
- 실제 사진 미제공 → 이미지 없음. 그래픽은 4단계 연구 모델 개념도 1개만 사용
- 공식 이메일 미제공 → 연락처 영역은 "공식 연락처 입력 필요" 플레이스홀더

## Design System
- **팔레트**: 짙은 남색(#0B1526~#1F3352) · 백색/페이퍼(#FBFCFE) · 청록 포인트 1색(#0F7C6F)
- **타이포**: Pretendard Variable (로컬 woff2) 본문 + Noto Serif KR 제목
- **스타일**: 넓은 여백, 명확한 제목 위계, 장식 최소화 (그라디언트·빛나는 효과 없음)
- **접근성**: 시맨틱 HTML, skip link, 키보드 포커스 링, `prefers-reduced-motion`, 표 스크롤 영역 `tabindex`, `word-break: keep-all`

## Data Architecture
- **콘텐츠**: 모든 문안은 `src/data.ts` 상수 (MODEL_STAGES, RESEARCH_QUESTIONS, AGENDA_TRACKS, WORK_PACKAGES, TECH_ROWS, OUTPUTS, ROADMAP, COLLAB_*)
- **저장 서비스**: 없음 (정적 SSR 사이트, D1/KV/R2 미사용)

## Tech Stack
- Hono (JSX SSR) + Vite + Cloudflare Pages
- Vanilla JS 인터랙션 (nav 스크롤 동기화, 모바일 메뉴)
- PM2 + `wrangler pages dev dist` (샌드박스 개발 서버, port 3000)

## Development
```bash
npm run build                      # dist/ 빌드 (소스 수정 후 필수)
pm2 start ecosystem.config.cjs     # 개발 서버 시작
curl http://localhost:3000         # 확인
```

## Deployment
- **Platform**: Cloudflare Pages (예정)
- **Status**: ⏳ 배포 대기 (사용자 배포 방식 선택 필요)
- **Last Updated**: 2026-08-31
