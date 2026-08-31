import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ko">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>KHouseHold Research — 사람을 존중하는 생활공간 센싱 연구</title>
        <meta
          name="description"
          content="KHouseHold는 카메라에 과도하게 의존하지 않는 센싱으로 생활공간 속 사람의 존재·위치·움직임을 이해하고, 비접촉 행동·생체 모니터링과 프라이버시 친화적 디지털 트윈으로 확장하는 연구를 수행합니다."
        />
        <meta property="og:title" content="KHouseHold Research" />
        <meta
          property="og:description"
          content="Privacy-aware sensing and spatial intelligence for everyday life."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/svg+xml" href="/static/assets/favicon.svg" />
        <link rel="preload" href="/static/fonts/PretendardVariable.woff2" as="font" type="font/woff2" crossorigin="" />
        <link href="/static/tokens.css" rel="stylesheet" />
        <link href="/static/site.css" rel="stylesheet" />
      </head>
      <body>
        {children}
        <script src="/static/app.js" defer></script>
      </body>
    </html>
  )
})
