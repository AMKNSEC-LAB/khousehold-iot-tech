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
            <span>카메라 없이도, 가구가</span>
            <span class="khh-hero-accent">사람을 알아봅니다.</span>
          </h1>
          <p class="khh-hero-deck">
            KHouseHold는 소파 같은 가구 안에 작은 센서를 넣어, 사람이 어디에 있고 어떻게 움직이는지 알아내는
            기술을 연구합니다. 영상은 찍지 않습니다. 꼭 필요한 정보만 남기고 나머지는 그 자리에서 지웁니다.
          </p>
        </div>
        <aside class="khh-hero-note">
          <span>Current focus</span>
          <strong>
            지금은 두 센서의 기준을
            <br />
            정확히 맞추는 단계입니다
          </strong>
          <p>거리 센서 + 움직임 센서 · 진행 중</p>
          <em>rev.03 · 42.3°C · edge ● online</em>
        </aside>
      </div>

      <figure
        class="khh-research-figure"
        role="img"
        aria-label="센서 신호가 네 단계를 거쳐 '있다/움직인다/없다'라는 최소한의 결과로 바뀌는 과정"
      >
        <figcaption>
          <span>Figure 01 · 신호가 결과가 되기까지</span>
          <span>센서 신호 → 꼭 필요한 결과만</span>
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
            <b>EDGE ● ONLINE</b> · 원본 신호는 가구 밖으로 나가지 않음
          </span>
          <strong>원본 데이터는 가구 안에서 지워지고, 밖으로는 결과만 나갑니다.</strong>
          <span>밖으로 나가는 것 · 결과뿐</span>
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
          첫 실험 무대는
          <br />
          진짜 소파입니다.
        </h2>
        <p class="khh-section-lead">
          실험실 장비가 아니라, 실제로 판매되는 <b>KENZY 소파</b>에 센서를 넣었습니다. 소파는 카메라 없이
          &ldquo;누가 앉아 있는지, 얼마나 머물렀는지, 자리를 옮겼는지&rdquo; 딱 세 가지만 기록합니다.
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
            <h3>자리마다 하나씩, 3개의 감지 구역.</h3>
            <p>
              소파의 세 자리에 각각 감지 구역을 하나씩 두었습니다. 각 구역이 기억하는 것은 <b>비어있음 · 앉아있음
              · 오래 머무름</b> 세 가지뿐입니다. 센서가 잰 원본 데이터는 소파 안에서 처리된 뒤 바로 지워집니다.
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
                  <b>초록 구역</b> · 지금 사람이 앉아 있는 자리
                </span>
              </li>
              <li>
                <span class="dot dot--idle"></span>
                <span>
                  <b>점선 구역</b> · 비어 있는 자리 (마지막 감지 시각만 표시)
                </span>
              </li>
              <li>
                <span class="dot dot--path"></span>
                <span>
                  <b>주황 점선</b> · 사람이 방금 이동한 경로
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
            이 소파가 모은 데이터는 두 가지에 쓰입니다. 하나는 KENZY 자체를 더 좋게 만드는 것 — 어느 자리가 얼마나
            쓰이는지 알면 쿠션 내구성을 실제 사용에 맞게 설계할 수 있습니다. 다른 하나는 같은 방식을 다른 가구로
            넓히는 기준이 되는 것입니다. <em>어떤 경우에도 영상은 찍지도, 저장하지도 않습니다.</em>
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
      정확하게 재는 것과
      <br />
      안전하게 다루는 것, 둘 다입니다.
    </SectionHead>
    <div class="khh-vision-grid">
      <div>
        <blockquote class="khh-vision-quote">
          가구가 사람을 이해하게 만들되, <em>사생활과 데이터의 안전</em>은 나중에 덧붙이는 게 아니라 처음부터
          설계에 넣어야 한다고 믿습니다.
        </blockquote>
        <p class="khh-vision-body">
          그래서 KHouseHold는 센서 성능만 연구하지 않습니다. 신호를 모으는 방법, 사람의 상태를 읽어내는 방법,
          개인정보를 지키는 방법, 그리고 이것을 실제 생활 서비스로 만드는 방법까지 — 처음부터 끝까지 하나로 이어서
          연구합니다.
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
        lead="소파에는 거리를 재는 센서와 기울기를 재는 센서, 두 종류가 들어갑니다. 이 둘은 박자도 기준도 서로 다릅니다. 둘을 정확히 맞춰야 '사람이 저기 있다'는 판단도 믿을 수 있습니다."
      >
        지금 가장 중요한 일은
        <br />두 센서의 눈높이를 맞추는 것입니다.
      </SectionHead>
      <Badge variant="current">현재 실험</Badge>
    </div>
    <div class="khh-focus-grid">
      <aside class="khh-focus-question">
        <span>지금 풀고 있는 질문</span>
        <blockquote>
          센서가 기울어지거나 흔들려도, &ldquo;지금 저 거리 변화는 사람이 움직인 것이다&rdquo;라고 매번 똑같이
          판단할 수 있을까?
        </blockquote>
        <p>아직 &ldquo;정확도 몇 %&rdquo;라고 말하지 않습니다. 여러 조건에서 충분히 시험한 뒤, 조건과 함께 숫자를 공개하겠습니다.</p>
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
      lead="어디까지 되어 있고 어디부터가 계획인지 섞이지 않도록, 연구를 '지금 하는 일 · 다음에 시도할 일 · 끝까지 지킬 원칙' 세 갈래로 나눴습니다."
    >
      연구는 세 갈래로
      <br />
      나뉘어 있습니다.
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
      lead="'지금 실제로 쓰는 기술'과 '앞으로 검토할 기술'을 한 표에서 구분해 보여드립니다. 이미 되는 것처럼 보이게 부풀리지 않기 위해서입니다."
    >
      지금 쓰는 기술과 검토 중인 기술,
      <br />
      한 표로 정리했습니다.
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
    <p class="khh-tech-caption">'향후 확장' 칸에 있는 것들은 아직 성과가 아닙니다. 지금 기반이 갖춰지면 다음으로 검토할 후보입니다.</p>
  </Section>
)

/* ---------- Evidence / Outcomes ---------- */
export const Outcomes: FC = () => (
  <Section id="outcomes" tone="white" labelledBy="outcomes-title">
    <SectionHead
      overline="05 — 연구 기반 / Evidence"
      titleId="outcomes-title"
      lead="완성된 제품을 자랑하는 대신, 지금까지 실제로 만들어 둔 것들을 있는 그대로 보여드립니다."
    >
      지금까지
      <br />
      만들어 둔 것들입니다.
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
      <strong>약속 ·</strong> 성능 숫자는 충분히 검증한 뒤에, 어떤 조건에서 잰 것인지와 함께 공개합니다. 그 전에는
      &ldquo;여기까지 만들었다&rdquo;는 사실만 말씀드립니다.
    </p>
  </Section>
)

/* ---------- Roadmap ---------- */
export const Roadmap: FC = () => (
  <Section id="roadmap" tone="plain" labelledBy="roadmap-title">
    <SectionHead
      overline="06 — 확장 경로 / Roadmap"
      titleId="roadmap-title"
      lead="확정된 출시 일정이 아니라 연구가 나아가는 순서입니다. 실험 결과에 따라 조정될 수 있습니다."
    >
      지금 → 다음 → 그 다음,
      <br />
      이 순서로 갑니다.
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
            이 연구, 함께 하실 분을 찾습니다.
          </h2>
          <p class="khh-contact-lead">
            센서 기술, 사람 중심 AI, 개인정보 보호, 스마트홈·헬스케어 실증 — 어느 주제든 좋습니다. 관심 있는
            대학·연구기관·기업이라면 부담 없이 연락해 주세요.
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
            버튼을 누르면 문의 양식이 담긴 이메일 초안이 열립니다. 받는 사람 주소만 채워서 보내시면 됩니다.
          </p>
        </div>
        <ul class="khh-contact-list">
          <li>
            <strong>함께 실험하기</strong>
            <span>센서 비교, 데이터 수집, 알고리즘 평가를 같이 설계합니다</span>
          </li>
          <li>
            <strong>실제 공간에서 검증하기</strong>
            <span>스마트홈, 돌봄, 안전, 웰니스 공간에 적용해 봅니다</span>
          </li>
          <li>
            <strong>학생 프로젝트로 참여하기</strong>
            <span>임베디드 센싱, 신호처리, 공간 AI 주제를 열어 둡니다</span>
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
