import { Hono } from 'hono'
import { renderer } from './renderer'
import {
  SiteHeader,
  Hero,
  ModelDiagram,
  Vision,
  Agenda,
  CurrentStudy,
  MethodsSection,
  Outputs,
  RoadmapSection,
  Collaboration,
  SiteFooter,
} from './components'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <>
      <a class="khh-skip" href="#main">
        본문으로 건너뛰기
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <ModelDiagram />
        <Vision />
        <Agenda />
        <CurrentStudy />
        <MethodsSection />
        <Outputs />
        <RoadmapSection />
        <Collaboration />
      </main>
      <SiteFooter />
    </>
  )
})

export default app
