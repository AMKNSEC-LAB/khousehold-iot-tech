import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ko">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>KHouseHold Research — 필요한 만큼만 이해하는 생활공간 센싱</title>
        <meta
          name="description"
          content="KHouseHold는 가구와 IoT를 접목해 프라이버시 친화적 비접촉 센싱으로 생활공간 속 사람의 존재·움직임·행동을 이해하는 연구 프로젝트입니다."
        />
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
