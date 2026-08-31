import { Hono } from 'hono'
import { renderer } from './renderer'
import {
  SiteHeader,
  Hero,
  ImageBand,
  LivingLab,
  Vision,
  Experiments,
  Programs,
  Methods,
  Outcomes,
  Roadmap,
  Contact,
  SiteFooter,
  Toast,
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
        <ImageBand />
        <LivingLab />
        <Vision />
        <Experiments />
        <Programs />
        <Methods />
        <Outcomes />
        <Roadmap />
        <Contact />
      </main>
      <SiteFooter />
      <Toast />
    </>
  )
})

export default app
