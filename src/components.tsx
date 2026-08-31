/* KHouseHold — page section components (Hono JSX, server-rendered) */
import type { FC } from 'hono/jsx'
import {
  NAV_ITEMS,
  PROGRAMS,
  WORK,
  TECH_ROWS,
  OUTCOMES,
  ROADMAP,
  PRINCIPLES,
  FLOW_STAGES,
  CONTACT_TEXT,
  type Badge as BadgeType,
} from './data'

export const Badge: FC<{ variant: BadgeType['variant']; children?: any }> = ({ variant, children }) => (
  <span class={`khh-badge khh-badge--${variant}`}>{children}</span>
)

/* ---------- Header ---------- */
export const SiteHeader: FC = () => (
  <header class="khh-header" id="site-header">
    <div class="khh-container khh-nav-shell">
      <a href="#top" class="khh-brand" id="brand-link">
        <span class="khh-brand-mark">KHH</span>
        <span class="khh-brand-name">KHouseHold Research</span>
      </a>
      <button class="khh-menu-btn" id="menu-button" aria-label="메뉴 열기" aria-expanded="false" aria-controls="nav-links">
        <span class="khh-menu-icon" id="menu-icon" aria-hidden="true"></span>
      </button>
      <ul class="khh-nav-links" id="nav-links">
        {NAV_ITEMS.map((it) => (
          <li>
            <a href={`#${it.id}`} data-nav={it.id}>
              {it.label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" class="khh-nav-cta" data-nav="contact">
            Collaboration
          </a>
        </li>
      </ul>
    </div>
  </header>
)

/* ---------- Hero + research figure ---------- */
export const Hero: FC = () => (
  <section class="khh-hero" id="top">
    <div class="khh-container">
      <div class="khh-hero-grid">
        <div>
          <p class="khh-hero-kicker">Privacy-aware sensing for everyday life</p>
          <h1 class="khh-hero-title">
            <span>더 많이 보는 것이 아니라,</span>
            <span class="khh-hero-accent">필요한 만큼만 이해합니다.</span>
          </h1>
          <p class="khh-hero-deck">
            KHouseHold는 비영상 센서로 생활공간 속 사람과 움직임을 이해하되, 원시 데이터는 줄이고 필요한 상태만
            남기는 방법을 연구합니다.
          </p>
        </div>
        <aside class="khh-hero-note">
          <span>Current focus</span>
          <strong>
            ToF·IMU 정합과
            <br />
            사람 추적 베이스라인
          </strong>
          <p>VL53L5CX + BNO08X · 진행 중</p>
          <em>rev.03 · 42.3°C · edge ● online</em>
        </aside>
      </div>

      <figure
        class="khh-research-figure"
        role="img"
        aria-label="원시 거리와 자세 신호를 시간·좌표 기준으로 정합하고, 필요한 상태만 남기는 모델"
      >
        <figcaption>
          <span>Figure 01 · Signal-to-state research model</span>
          <span>raw signal → minimal, usable state</span>
        </figcaption>
        <div class="khh-model-flow">
          {FLOW_STAGES.map((s, i) => (
            <>
              <div class="khh-model-stage">
                <small>{s.step}</small>
                <strong>{s.title}</strong>
                <span>{s.sub}</span>
                <em>{s.meta}</em>
              </div>
              {i < FLOW_STAGES.length - 1 && (
                <span class="khh-model-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </>
          ))}
        </div>
        <div class="khh-privacy-boundary">
          <span>
            <b>EDGE ● ONLINE</b> · raw signal stays local
          </span>
          <strong>데이터는 줄이고, 해석은 필요한 만큼만 남깁니다.</strong>
          <span>Output · minimal state</span>
        </div>
      </figure>
    </div>
  </section>
)

/* ---------- Furniture image band ---------- */
export const ImageBand: FC = () => (
  <div class="khh-image-band" aria-hidden="false">
    <figure>
      <img
        src="/static/assets/furniture-living-room.jpg"
        alt="따뜻한 톤의 거실에 놓인 KHouseHold 가구"
        loading="lazy"
      />
      <figcaption>
        <span>
          <b>ROOM 03</b> · WALNUT SHELF
        </span>
        <span>presence: idle · dwell 00:12:41</span>
      </figcaption>
    </figure>
  </div>
)

/* ---------- Section shell ---------- */
export const Section: FC<{
  id: string
  tone?: 'white' | 'tint' | 'dark' | 'plain'
  labelledBy: string
  children?: any
}> = ({ id, tone = 'white', labelledBy, children }) => {
  const cls =
    tone === 'plain'
      ? 'khh-section'
      : `khh-section khh-section--${tone}`
  return (
    <section class={cls} id={id} aria-labelledby={labelledBy}>
      <div class="khh-container">{children}</div>
    </section>
  )
}

export const SectionHead: FC<{ overline: string; titleId: string; lead?: string; children?: any }> = ({
  overline,
  titleId,
  lead,
  children,
}) => (
  <header class="khh-section-head">
    <span class="khh-overline">{overline}</span>
    <h2 class="khh-section-title" id={titleId}>
      {children}
    </h2>
    {lead && <p class="khh-section-lead">{lead}</p>}
  </header>
)

/* ---------- Living Lab · KENZY ---------- */
export const LivingLab: FC = () => (
  <section class="khh-livinglab" id="livinglab" aria-labelledby="livinglab-title">
    <div class="khh-container">
      <header class="khh-section-head">
        <span class="khh-overline">08 — 리빙 랩 / Living lab</span>
        <h2 class="khh-section-title" id="livinglab-title">
          가구 위에서, 사람 없이
          <br />
          사람을 이해합니다.
        </h2>
        <p class="khh-section-lead">
          KENZY 실리콘가죽 소파를 첫 번째 <b>리빙 랩</b>으로 삼습니다. 카메라 없이 소파의 좌면·등받이·측면에 배치된
          저해상 신호만으로 존재·머무름·이동을 최소한만 기록합니다.
        </p>
      </header>

      <div class="khh-lab-grid">
        <figure class="khh-lab-fig khh-lab-fig--tall">
          <div class="khh-lab-fig-frame">
            <img
              src="/static/assets/furniture-kenzy-annotated.jpg"
              alt="KENZY 소파 위 3개 존이 각각 seated / idle·dwell / empty 상태로 표시된 사진 오버레이"
              loading="lazy"
            />
          </div>
          <figcaption>
            <span>
              <b>FIG 02</b> · KENZY sectional · zone view
            </span>
            <span>3 zones · ToF+IMU · KHH rev.03</span>
          </figcaption>
        </figure>

        <div class="khh-lab-copy">
          <article class="khh-lab-callout">
            <span>Case 01</span>
            <h3>3개 좌면을 3개 존으로.</h3>
            <p>
              소파 모듈마다 하나의 존이 대응합니다. 각 존은 <b>비어있음 · 앉아있음 · 오래 머무름</b> 세 상태만
              남기고, 원시 거리 데이터는 소파 안쪽 모듈에서만 처리한 뒤 폐기됩니다.
            </p>
            <dl class="khh-lab-facts">
              <div>
                <dt>Sensor</dt>
                <dd>VL53L5CX · 8×8 · 15 Hz</dd>
              </div>
              <div>
                <dt>Compute</dt>
                <dd>edge · on-module · ≤ 60 s retention</dd>
              </div>
              <div>
                <dt>Export</dt>
                <dd>state only · presence / dwell</dd>
              </div>
            </dl>
          </article>

          <article class="khh-lab-callout khh-lab-callout--muted">
            <span>Reading the figure</span>
            <ul class="khh-lab-legend">
              <li>
                <span class="dot dot--live"></span>
                <span>
                  <b>Live zone</b> · 사람 감지, 상태 라벨링 중
                </span>
              </li>
              <li>
                <span class="dot dot--idle"></span>
                <span>
                  <b>Empty zone</b> · 마지막 감지 시각 표시
                </span>
              </li>
              <li>
                <span class="dot dot--path"></span>
                <span>
                  <b>Track path</b> · 최근 이동 궤적 (state만 보관)
                </span>
              </li>
            </ul>
          </article>
        </div>
      </div>

      <figure class="khh-lab-fig khh-lab-fig--wide">
        <div class="khh-lab-fig-frame">
          <img
            src="/static/assets/furniture-kenzy-zonemap.jpg"
            alt="L자형 KENZY 소파 위에 4개 존과 사람 이동 궤적이 표시된 탑다운 오버레이"
            loading="lazy"
          />
        </div>
        <figcaption>
          <span>
            <b>FIG 03</b> · Room 03 · L-shaped install · zone map
          </span>
          <span>4 zones · 2 presence · 1 track · Δt&lt;20 ms</span>
        </figcaption>
      </figure>

      <div class="khh-lab-notes">
        <div>
          <span class="khh-overline">Field notes</span>
          <p>
            리빙 랩에서 얻은 신호는 KENZY 자체 품질 개선(좌면 마모, 사용 시간)에 사용될 수 있고, 동일 프로토콜을
            다른 KHouseHold 가구 라인으로 확장하는 기준이 됩니다. <em>원시 이미지는 저장되지 않습니다.</em>
          </p>
        </div>
        <ul class="khh-lab-stats">
          <li>
            <b>3년</b>
            <span>제품 품질 보증 · 실측 데이터로 뒷받침</span>
          </li>
          <li>
            <b>100%</b>
            <span>국내 제작 · 관리가 편한 실리콘가죽</span>
          </li>
          <li>
            <b>0</b>
            <span>클라우드로 전송되는 원시 프레임</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

/* ---------- Vision ---------- */
export const Vision: FC = () => (
  <Section id="vision" tone="white" labelledBy="vision-title">
    <SectionHead overline="01 — 연구 비전 / Research vision" titleId="vision-title">
      측정 정확도와 데이터 책임성을
      <br />
      하나의 연구 문제로 봅니다.
    </SectionHead>
    <div class="khh-vision-grid">
      <div>
        <blockquote class="khh-vision-quote">
          공간에서 얻은 신호가 사람에 대한 이해로 이어지되, <em>개인의 존엄과 데이터의 안전</em>은 처음부터
          설계되어야 합니다.
        </blockquote>
        <p class="khh-vision-body">
          KHouseHold는 센서 하나의 성능을 보여주는 데 머물지 않습니다. 신호의 수집과 정합, 사람 상태의 해석,
          프라이버시 보호, 공간 서비스로의 번역을 하나의 연속된 연구 체계로 다룹니다.
        </p>
      </div>
      <ol class="khh-principles">
        {PRINCIPLES.map((p) => (
          <li>
            <span class="khh-principle-no">{p.n}</span>
            <div>
              <strong>{p.t}</strong>
              <p>{p.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </Section>
)

/* ---------- Now / Experiments ---------- */
export const Experiments: FC = () => (
  <Section id="experiments" tone="tint" labelledBy="experiments-title">
    <div class="khh-focus-head">
      <SectionHead
        overline="02 — 현재 실험 / Current work"
        titleId="experiments-title"
        lead="VL53L5CX의 멀티존 거리 분포와 BNO08X의 자세 정보를 같은 시간·공간 좌표에서 해석할 수 있어야, 이후 사람 추적과 상태 이해도 신뢰할 수 있습니다."
      >
        지금 가장 중요한 일은
        <br />
        서로 다른 센서의 기준을 맞추는 것입니다.
      </SectionHead>
      <Badge variant="current">현재 실험</Badge>
    </div>
    <div class="khh-focus-grid">
      <aside class="khh-focus-question">
        <span>Current research question</span>
        <blockquote>
          센서가 기울거나 이동하고 측정 주기가 다를 때도, 거리 변화가 실제 사람의 움직임인지 일관되게 구분할 수
          있는가?
        </blockquote>
        <p>현재 단계에서는 특정 정확도나 임상적 효용을 확정하지 않습니다. 정량 성능은 조건별 평가가 축적된 뒤 공개합니다.</p>
      </aside>
      <ol class="khh-work-list">
        {WORK.map((w) => (
          <li class="khh-work-item">
            <span class="khh-work-no">{w.no}</span>
            <div>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </div>
            <Badge variant={w.badge.variant}>{w.badge.label}</Badge>
          </li>
        ))}
      </ol>
    </div>
  </Section>
)

/* ---------- Programs ---------- */
export const Programs: FC = () => (
  <Section id="tracks" tone="white" labelledBy="tracks-title">
    <SectionHead
      overline="03 — 연구 프로그램 / Programs"
      titleId="tracks-title"
      lead="모든 주제를 같은 단계의 성과처럼 나열하지 않고, 현재 기반·해석 확장·책임 있는 적용이라는 세 축으로 구분합니다."
    >
      여섯 개의 주제를
      <br />세 개의 연구 프로그램으로 묶습니다.
    </SectionHead>
    <div class="khh-program-list">
      {PROGRAMS.map((p) => (
        <article class="khh-program">
          <div class="khh-program-id">
            PROGRAM {p.id}
            <br />
            <Badge variant={p.badge.variant}>{p.badge.label}</Badge>
          </div>
          <div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
          <ul class="khh-program-topics">
            {p.topics.map((t) => (
              <li>
                <strong>{t.label}</strong> · {t.detail}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </Section>
)

/* ---------- Methods (dark table) ---------- */
export const Methods: FC = () => (
  <Section id="technology" tone="dark" labelledBy="technology-title">
    <SectionHead
      overline="04 — 방법과 기술 / Methods"
      titleId="technology-title"
      lead="현재 실제로 실험하는 기술, 방법론을 구체화하는 기술, 장기적으로 검토하는 기술이 혼동되지 않도록 구분했습니다."
    >
      현재 기술과 확장 기술을
      <br />
      분리해 제시합니다.
    </SectionHead>
    <div class="khh-tech-table-wrap">
      <table class="khh-tech-table">
        <thead>
          <tr>
            <th>연구 계층</th>
            <th>현재 기반</th>
            <th>진행·탐색</th>
            <th>향후 확장</th>
          </tr>
        </thead>
        <tbody>
          {TECH_ROWS.map((r) => (
            <tr>
              <td>
                <strong>{r.layer}</strong>
              </td>
              <td>{r.now}</td>
              <td>{r.progress}</td>
              <td class="khh-future-cell">{r.future}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p class="khh-tech-caption">표의 '향후 확장' 항목은 검증된 성과가 아니라 현재 연구 기반 위에서 검토할 방향입니다.</p>
  </Section>
)

/* ---------- Evidence / Outcomes ---------- */
export const Outcomes: FC = () => (
  <Section id="outcomes" tone="white" labelledBy="outcomes-title">
    <SectionHead
      overline="05 — 연구 기반 / Evidence"
      titleId="outcomes-title"
      lead="완결된 제품이나 확정적 성능 대신, 현재 축적 중인 방법론·프로토타입·평가 자산을 투명하게 제시합니다."
    >
      지금의 성과는
      <br />
      다음 검증을 가능하게 하는 연구 기반입니다.
    </SectionHead>
    <div class="khh-outcome-grid">
      {OUTCOMES.map((o) => (
        <article class="khh-outcome">
          <span class="khh-outcome-no">{o.no}</span>
          <div>
            <h3>{o.title}</h3>
            <p>{o.body}</p>
            <Badge variant={o.badge.variant}>{o.badge.label}</Badge>
          </div>
        </article>
      ))}
    </div>
    <p class="khh-evidence-rule">
      <strong>EVIDENCE RULE ·</strong> 성능 수치와 임상적 효용은 검증 시점에 조건과 함께 공개합니다. 연구 기반의
      축적 상태만 투명하게 제시합니다.
    </p>
  </Section>
)

/* ---------- Roadmap ---------- */
export const Roadmap: FC = () => (
  <Section id="roadmap" tone="plain" labelledBy="roadmap-title">
    <SectionHead
      overline="06 — 확장 경로 / Roadmap"
      titleId="roadmap-title"
      lead="로드맵은 확정된 제품 일정이 아니라 현재 실험 결과와 검증 수준에 따라 조정되는 연구 확장 경로입니다."
    >
      현재, 다음, 장기를
      <br />
      명확히 나눕니다.
    </SectionHead>
    <div class="khh-roadmap-list">
      {ROADMAP.map((r) => (
        <article class="khh-roadmap-item">
          <span class="khh-roadmap-phase">{r.phase}</span>
          <h3>{r.title}</h3>
          <p>{r.body}</p>
          <Badge variant={r.badge.variant}>{r.badge.label}</Badge>
        </article>
      ))}
    </div>
  </Section>
)

/* ---------- Collaboration / Contact ---------- */
export const Contact: FC = () => {
  const mailto = `mailto:?subject=${encodeURIComponent('KHouseHold 연구 협력 문의')}&body=${encodeURIComponent(CONTACT_TEXT)}`
  return (
    <Section id="contact" tone="dark" labelledBy="contact-title">
      <div class="khh-contact-layout">
        <div>
          <span class="khh-overline khh-overline--on-dark">07 — 협력 / Collaboration</span>
          <h2 class="khh-contact-title" id="contact-title">
            생활공간 센싱의 다음 질문을 함께 연구합니다.
          </h2>
          <p class="khh-contact-lead">
            센서 융합, 사람 중심 AI, 프라이버시 보호, 스마트홈·헬스케어 실증을 함께 탐구할 대학·연구기관·기업
            파트너를 기다립니다.
          </p>
          <div class="khh-contact-actions">
            <a class="khh-btn khh-btn--primary" href={mailto}>
              이메일 초안 열기
            </a>
            <button class="khh-btn" id="copy-inquiry-button" type="button">
              문의 문구 복사
            </button>
          </div>
          <p class="khh-contact-hint">
            이메일 초안에는 수신자가 지정되어 있지 않습니다. KHouseHold의 공식 연락처를 연결해 사용하세요.
          </p>
        </div>
        <ul class="khh-contact-list">
          <li>
            <strong>공동 연구와 실험 설계</strong>
            <span>센서 비교, 데이터 수집, 알고리즘 평가</span>
          </li>
          <li>
            <strong>생활환경 실증</strong>
            <span>스마트홈, 돌봄, 안전, 웰니스 공간</span>
          </li>
          <li>
            <strong>학생 프로젝트와 교류</strong>
            <span>임베디드 센싱, 신호처리, 공간 AI</span>
          </li>
        </ul>
      </div>
    </Section>
  )
}

/* ---------- Footer + toast ---------- */
export const SiteFooter: FC = () => (
  <footer class="khh-footer">
    <div class="khh-container khh-footer-inner">
      <strong>KHouseHold Research</strong>
      <p>© {new Date().getFullYear()} KHouseHold. Research status and scope may evolve as validation progresses.</p>
    </div>
  </footer>
)

export const Toast: FC = () => (
  <div class="khh-toast" id="toast" role="status" aria-live="polite"></div>
)
