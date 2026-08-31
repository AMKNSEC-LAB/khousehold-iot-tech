/* KHouseHold Research — page components (학술 연구 포트폴리오) */
import type { FC } from 'hono/jsx'
import {
  NAV_ITEMS,
  MODEL_STAGES,
  MODEL_NOTE,
  RESEARCH_QUESTIONS,
  AGENDA_TRACKS,
  WORK_PACKAGES,
  STUDY_STATUS_NOTE,
  TECH_ROWS,
  TECH_NOTE,
  OUTPUTS,
  OUTPUTS_NOTE,
  ROADMAP,
  ROADMAP_NOTE,
  COLLAB_TOPICS,
  COLLAB_TEXT,
  FOOTER_TEXT,
  type Badge as BadgeData,
} from './data'

/* ---------- Badge ---------- */

export const Badge: FC<{ badge: BadgeData }> = ({ badge }) => (
  <span class={`khh-badge khh-badge--${badge.variant}`}>
    <span class="khh-badge-dot" aria-hidden="true"></span>
    {badge.label}
  </span>
)

/* ---------- Header ---------- */

export const SiteHeader: FC = () => (
  <header id="site-header" class="khh-header">
    <div class="khh-header-inner">
      <a class="khh-brand" href="#top" aria-label="KHouseHold Research 홈">
        <span class="khh-brand-mark" aria-hidden="true">
          KH
        </span>
        <span class="khh-brand-name">
          KHouseHold <em>Research</em>
        </span>
      </a>
      <nav class="khh-nav" aria-label="주요 섹션">
        <button
          id="menu-button"
          class="khh-menu-button"
          type="button"
          aria-expanded="false"
          aria-controls="nav-links"
          aria-label="메뉴 열기"
        >
          <span id="menu-icon" class="khh-menu-icon" aria-hidden="true">
            <span></span>
            <span></span>
          </span>
        </button>
        <ul id="nav-links" class="khh-nav-links">
          {NAV_ITEMS.map((item) => (
            <li>
              <a href={`#${item.id}`} data-nav={item.id}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)

/* ---------- Hero ---------- */

export const Hero: FC = () => (
  <section id="top" class="khh-hero" aria-labelledby="hero-title">
    <div class="khh-container khh-hero-grid">
      <div class="khh-hero-copy">
        <p class="khh-eyebrow">Privacy-aware sensing for inhabited spaces</p>
        <h1 id="hero-title" class="khh-hero-title">
          <span>생활공간의 신호에서,</span>
          <span class="khh-hero-accent">사람을 존중하는 공간지능으로.</span>
        </h1>
        <p class="khh-hero-deck">
          KHouseHold는 카메라에 과도하게 의존하지 않는 센싱을 통해 생활공간 속 사람의 존재·위치·움직임을
          이해하고, 비접촉 행동·생체 모니터링과 프라이버시 친화적 디지털 트윈으로 확장하는 연구를 수행합니다.
        </p>
      </div>
      <aside class="khh-hero-focus" aria-label="현재 연구 초점">
        <p class="khh-focus-label">현재 연구 초점</p>
        <p class="khh-focus-hardware">VL53L5CX ToF + BNO08X IMU</p>
        <p class="khh-focus-desc">시간 동기화 · 자세 보정 · 좌표 정합 · 사람 추적 베이스라인</p>
        <Badge badge={{ label: '현재 실험 및 검증 중', variant: 'now' }} />
      </aside>
    </div>
  </section>
)

/* ---------- 연구 모델 개념도 ---------- */

export const ModelDiagram: FC = () => (
  <section id="model" class="khh-model" aria-labelledby="model-title">
    <div class="khh-container">
      <h2 id="model-title" class="khh-model-title">
        센서의 측정값이 신뢰할 수 있는 공간 정보가 되기까지
      </h2>
      <ol class="khh-model-flow">
        {MODEL_STAGES.map((stage, i) => (
          <li class="khh-model-stage">
            <p class="khh-stage-step">
              {stage.step} · {stage.en}
            </p>
            <p class="khh-stage-ko">{stage.ko}</p>
            <p class="khh-stage-desc">{stage.desc}</p>
            {i < MODEL_STAGES.length - 1 && (
              <span class="khh-stage-arrow" aria-hidden="true">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
      <p class="khh-model-note">{MODEL_NOTE}</p>
    </div>
  </section>
)

/* ---------- Section shell ---------- */

export const Section: FC<{
  id: string
  label: string
  children: any
  tone?: 'plain' | 'tint'
}> = ({ id, label, children, tone = 'plain' }) => (
  <section id={id} class={`khh-section khh-section--${tone}`} aria-labelledby={`${id}-title`}>
    <div class="khh-container">
      <p class="khh-section-label">{label}</p>
      {children}
    </div>
  </section>
)

/* ---------- Research Vision ---------- */

export const Vision: FC = () => (
  <Section id="vision" label="Research Vision">
    <h2 id="vision-title" class="khh-section-title">
      측정 정확도와 데이터 책임성을
      <br />
      하나의 연구 문제로 봅니다.
    </h2>
    <div class="khh-vision-grid">
      <p class="khh-vision-body">
        생활공간 센싱의 가치는 센서가 많은 데이터를 모으는 데 있지 않습니다. 서로 다른 신호가 같은 시간과
        공간을 가리키는지 검증하고, 그 신호로 무엇을 어디까지 해석할 수 있는지 밝히며, 필요한 범위를 넘는
        정보는 수집·보유·공유하지 않도록 설계하는 데 있습니다. KHouseHold는 센싱, 사람 이해, 프라이버시,
        공간 서비스의 전 과정을 하나의 연구 체계로 다룹니다.
      </p>
      <aside class="khh-questions" aria-label="핵심 연구 질문">
        <h3 class="khh-questions-title">핵심 연구 질문</h3>
        <ol class="khh-questions-list">
          {RESEARCH_QUESTIONS.map((q, i) => (
            <li>
              <span class="khh-question-no" aria-hidden="true">
                Q{i + 1}
              </span>
              <span>{q}</span>
            </li>
          ))}
        </ol>
      </aside>
    </div>
  </Section>
)

/* ---------- Research Agenda ---------- */

export const Agenda: FC = () => (
  <Section id="agenda" label="Research Agenda" tone="tint">
    <h2 id="agenda-title" class="khh-section-title">
      연구는 세 갈래로 이어집니다.
    </h2>
    <div class="khh-agenda-grid">
      {AGENDA_TRACKS.map((track) => (
        <article class="khh-agenda-card">
          <header class="khh-agenda-head">
            <p class="khh-agenda-no">{track.no}</p>
            <Badge badge={track.badge} />
          </header>
          <h3 class="khh-agenda-en">{track.en}</h3>
          <p class="khh-agenda-desc">{track.desc}</p>
          <ul class="khh-agenda-items">
            {track.items.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </Section>
)

/* ---------- Current Study ---------- */

export const CurrentStudy: FC = () => (
  <Section id="current-study" label="Current Study">
    <h2 id="current-study-title" class="khh-section-title">
      현재의 핵심 과제는 ToF와 IMU가
      <br />
      같은 장면을 설명하도록 만드는 것입니다.
    </h2>
    <p class="khh-study-body">
      VL53L5CX는 시야 안의 거리를 여러 구역으로 나누어 측정하고, BNO08X는 센서의 방향과 움직임을
      제공합니다. 두 센서는 서로 다른 주기와 좌표 기준을 갖기 때문에 단순히 값을 함께 기록하는 것만으로는
      사람의 실제 위치를 일관되게 설명할 수 없습니다. KHouseHold는 시간 정렬, 자세 기반 좌표 변환, 환경별
      거리 변화 분석을 통해 이후 사람 추적과 상태 해석이 의존할 수 있는 측정 기반을 구축하고 있습니다.
    </p>
    <div class="khh-wp-grid">
      {WORK_PACKAGES.map((wp) => (
        <article class="khh-wp-card">
          <header class="khh-wp-head">
            <p class="khh-wp-no">{wp.no}</p>
            <Badge badge={wp.badge} />
          </header>
          <h3 class="khh-wp-title">{wp.title}</h3>
          <p class="khh-wp-desc">{wp.desc}</p>
        </article>
      ))}
    </div>
    <p class="khh-status-note">
      <strong>연구 상태 안내 ·</strong> {STUDY_STATUS_NOTE}
    </p>
  </Section>
)

/* ---------- Methods & Technology ---------- */

export const MethodsSection: FC = () => (
  <Section id="methods" label="Methods & Technology" tone="tint">
    <h2 id="methods-title" class="khh-section-title">
      연구 계층별로 현재 기반과
      <br />
      확장 방향을 구분합니다.
    </h2>
    <div class="khh-table-wrap" role="region" aria-label="연구 계층별 기술 현황 표" tabindex={0}>
      <table class="khh-tech-table">
        <thead>
          <tr>
            <th scope="col">연구 계층</th>
            <th scope="col">현재 기반</th>
            <th scope="col">진행·탐색</th>
            <th scope="col">향후 확장</th>
          </tr>
        </thead>
        <tbody>
          {TECH_ROWS.map((row) => (
            <tr>
              <th scope="row">{row.layer}</th>
              <td>{row.current}</td>
              <td>{row.exploring}</td>
              <td class="khh-td-future">{row.future}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p class="khh-table-note">{TECH_NOTE}</p>
  </Section>
)

/* ---------- Research Outputs ---------- */

export const Outputs: FC = () => (
  <Section id="outputs" label="Research Outputs">
    <h2 id="outputs-title" class="khh-section-title">
      현재 축적 중인 연구 기반입니다.
    </h2>
    <ol class="khh-outputs-list">
      {OUTPUTS.map((item) => (
        <li class="khh-output-row">
          <p class="khh-output-no" aria-hidden="true">
            {item.no}
          </p>
          <div class="khh-output-main">
            <header class="khh-output-head">
              <h3 class="khh-output-title">{item.title}</h3>
              <Badge badge={item.badge} />
            </header>
            <p class="khh-output-desc">{item.desc}</p>
          </div>
        </li>
      ))}
    </ol>
    <p class="khh-status-note">{OUTPUTS_NOTE}</p>
  </Section>
)

/* ---------- Roadmap ---------- */

export const RoadmapSection: FC = () => (
  <Section id="roadmap" label="Roadmap" tone="tint">
    <h2 id="roadmap-title" class="khh-section-title">
      연구 의존관계에 따라
      <br />
      단계적으로 확장합니다.
    </h2>
    <ol class="khh-roadmap">
      {ROADMAP.map((phase) => (
        <li class="khh-roadmap-phase">
          <header class="khh-roadmap-head">
            <p class="khh-roadmap-phase-name">
              {phase.phase} <span aria-hidden="true">·</span> <em>{phase.en}</em>
            </p>
            <Badge badge={phase.badge} />
          </header>
          <p class="khh-roadmap-desc">{phase.desc}</p>
        </li>
      ))}
    </ol>
    <p class="khh-table-note">{ROADMAP_NOTE}</p>
  </Section>
)

/* ---------- Collaboration ---------- */

export const Collaboration: FC = () => (
  <Section id="collaboration" label="Collaboration">
    <h2 id="collaboration-title" class="khh-section-title">
      {COLLAB_TEXT.title}
    </h2>
    <div class="khh-collab-grid">
      <div>
        <p class="khh-collab-body">{COLLAB_TEXT.body}</p>
        <h3 class="khh-collab-subtitle">협력 주제</h3>
        <ul class="khh-collab-topics">
          {COLLAB_TOPICS.map((topic) => (
            <li>{topic}</li>
          ))}
        </ul>
      </div>
      <aside class="khh-contact-box" aria-label="연락처">
        <p class="khh-contact-label">Contact</p>
        <p class="khh-contact-placeholder">{COLLAB_TEXT.contactNote}</p>
        <p class="khh-contact-hint">{COLLAB_TEXT.contactHint}</p>
      </aside>
    </div>
  </Section>
)

/* ---------- Footer ---------- */

export const SiteFooter: FC = () => (
  <footer class="khh-footer">
    <div class="khh-container">
      <p class="khh-footer-line1">{FOOTER_TEXT.line1}</p>
      <p class="khh-footer-line2">{FOOTER_TEXT.line2}</p>
    </div>
  </footer>
)
