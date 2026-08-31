/* KHouseHold Research — content data
   학술 연구 포트폴리오 개편안 (제공된 최종 문안 기준).
   상태 배지: now(현재 실험) / explore(탐색 중) / later(향후 확장) / principle(설계 원칙) */

export type BadgeVariant = 'now' | 'explore' | 'later' | 'principle'

export interface Badge {
  label: string
  variant: BadgeVariant
}

/* ---------- Navigation ---------- */

export const NAV_ITEMS = [
  { id: 'vision', label: 'Vision' },
  { id: 'agenda', label: 'Research Agenda' },
  { id: 'current-study', label: 'Current Study' },
  { id: 'methods', label: 'Methods' },
  { id: 'outputs', label: 'Research Outputs' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'collaboration', label: 'Collaboration' },
] as const

/* ---------- 연구 모델 개념도 (SENSE → ALIGN → INFER → GOVERN & TRANSLATE) ---------- */

export const MODEL_STAGES = [
  {
    step: '01',
    en: 'SENSE',
    ko: '측정',
    desc: 'VL53L5CX의 멀티존 거리 분포와 BNO08X의 자세 정보를 수집합니다.',
  },
  {
    step: '02',
    en: 'ALIGN',
    ko: '정합',
    desc: '서로 다른 센서의 시간축을 맞추고 자세 변화와 좌표계 차이를 보정합니다.',
  },
  {
    step: '03',
    en: 'INFER',
    ko: '해석',
    desc: '정합된 거리 변화를 바탕으로 사람의 존재, 위치, 이동을 추정하고 조건별 신뢰도를 평가합니다.',
  },
  {
    step: '04',
    en: 'GOVERN & TRANSLATE',
    ko: '책임 있는 활용',
    desc: '필요한 정보만 남기는 데이터 구조와 접근 원칙을 설계하고, 검증된 상태 정보를 디지털 트윈과 생활환경 서비스로 연결합니다.',
  },
] as const

export const MODEL_NOTE =
  '이 개념도는 연구의 처리 흐름과 검증 범위를 설명합니다. 특정 성능이나 완성된 제품을 의미하지 않습니다.'

/* ---------- Research Vision — 핵심 연구 질문 ---------- */

export const RESEARCH_QUESTIONS = [
  '센서의 방향과 설치 조건이 달라져도 거리 정보를 일관된 공간 좌표로 변환할 수 있는가?',
  '카메라 없이 사람의 존재·위치·이동을 어느 조건까지 신뢰성 있게 추정할 수 있는가?',
  '위치 추적의 기반을 행동과 비접촉 생체 신호 이해로 어떻게 확장할 수 있는가?',
  '원시 데이터 노출을 줄이면서 공간 상태를 디지털 트윈과 서비스에 안전하게 활용하려면 어떤 구조가 필요한가?',
] as const

/* ---------- Research Agenda ---------- */

export interface AgendaTrack {
  no: string
  en: string
  badge: Badge
  desc: string
  items: string[]
}

export const AGENDA_TRACKS: AgendaTrack[] = [
  {
    no: '01',
    en: 'Sensing & Spatial Tracking',
    badge: { label: '현재 핵심 연구', variant: 'now' },
    desc: 'ToF와 IMU 신호를 공통 시간·공간 기준으로 정렬하고, 사람의 존재와 이동을 해석할 수 있는 측정 기반을 연구합니다.',
    items: [
      '멀티존 거리 센싱',
      '센서 시간 동기화',
      '자세 보정과 좌표 변환',
      '존재 감지와 사람 추적 베이스라인',
      '배치·환경 조건에 따른 재현성 평가',
    ],
  },
  {
    no: '02',
    en: 'Contactless Human Understanding',
    badge: { label: '탐색 연구', variant: 'explore' },
    desc: '공간 추적을 기반으로 휴식, 움직임, 행동 변화와 같은 생활 맥락을 해석하고, mmWave를 이용한 비접촉 생체 신호 측정 가능성을 탐색합니다.',
    items: [
      '행동·활동 패턴 표현',
      '미세 움직임과 휴식 상태 탐색',
      'mmWave 보완 센싱 비교',
      '포인트클라우드 기반 공간 표현',
      '비접촉 호흡·심박 추정 가능성 검토',
    ],
  },
  {
    no: '03',
    en: 'Trustworthy Spatial Intelligence',
    badge: { label: '장기 연구 방향', variant: 'later' },
    desc: '센서 데이터의 수집 목적, 보유 범위, 접근 권한을 명확히 하고, 검증된 상태 정보만 프라이버시 친화적 디지털 트윈과 스마트 생활환경에 연결하는 방법을 연구합니다.',
    items: [
      '데이터 최소화와 목적 제한',
      '원시 신호와 파생 정보의 분리',
      '엣지 처리와 보유 정책 설계',
      '접근 제어와 활용 기록',
      '프라이버시 친화적 디지털 트윈',
    ],
  },
]

/* ---------- Current Study — Work Packages ---------- */

export interface WorkPackage {
  no: string
  title: string
  badge: Badge
  desc: string
}

export const WORK_PACKAGES: WorkPackage[] = [
  {
    no: 'WP01',
    title: '동시 수집과 시간 정렬',
    badge: { label: '구축·검증 중', variant: 'now' },
    desc: '두 센서의 데이터를 공통 시간축에서 비교하고 반복 실험이 가능한 형태로 기록합니다.',
  },
  {
    no: 'WP02',
    title: '자세 보정과 좌표 정합',
    badge: { label: '현재 실험', variant: 'now' },
    desc: 'BNO08X의 자세 정보를 이용해 센서 방향 변화가 ToF 거리 분포에 미치는 영향을 분석하고, 일관된 공간 좌표로 변환하는 절차를 검증합니다.',
  },
  {
    no: 'WP03',
    title: '사람 감지와 추적 베이스라인',
    badge: { label: '평가 중', variant: 'now' },
    desc: '배경과 다른 연속적인 거리 변화를 이용해 존재, 위치, 이동을 추정하는 기초 방법을 평가합니다.',
  },
  {
    no: 'WP04',
    title: '조건별 검증 프로토콜',
    badge: { label: '설계 중', variant: 'explore' },
    desc: '센서 각도, 배치, 사람의 위치와 이동, 주변 환경 변화에 따라 결과가 어떻게 달라지는지 비교할 실험 조건과 평가 지표를 정리합니다.',
  },
]

export const STUDY_STATUS_NOTE =
  '현재는 측정 체계와 베이스라인을 구축·검증하는 단계입니다. 충분한 반복 실험과 조건별 비교가 완료되기 전에는 단일 정확도 수치를 성과로 제시하지 않습니다.'

/* ---------- Methods & Technology ---------- */

export interface TechRow {
  layer: string
  current: string
  exploring: string
  future: string
}

export const TECH_ROWS: TechRow[] = [
  {
    layer: 'Sensing',
    current: 'VL53L5CX ToF, BNO08X IMU',
    exploring: '설치·환경 조건 비교',
    future: 'mmWave, 고밀도 3차원 센싱',
  },
  {
    layer: 'Alignment & Representation',
    current: '시간 정렬, 자세 보정, 좌표 변환',
    exploring: '다중 센서 융합, 포인트클라우드 표현',
    future: '이종 시공간 데이터 통합',
  },
  {
    layer: 'Human Understanding',
    current: '존재·위치·이동 추정',
    exploring: '추적 성능 평가, 행동 특징 탐색',
    future: '비접촉 생체·행동 상태 해석',
  },
  {
    layer: 'Trust & Platform',
    current: '최소 수집을 지향하는 실험 설계',
    exploring: '엣지 처리, 보유·공유 정책 구체화',
    future: '접근 제어·감사를 포함한 디지털 트윈',
  },
]

export const TECH_NOTE =
  '향후 확장은 현재 완료된 기능이 아니라, 기초 연구 결과에 따라 검토할 연구 방향입니다.'

/* ---------- Research Outputs ---------- */

export interface OutputItem {
  no: string
  title: string
  badge: Badge
  desc: string
}

export const OUTPUTS: OutputItem[] = [
  {
    no: '01',
    title: 'ToF–IMU 통합 수집·시각화 환경',
    badge: { label: '고도화 중', variant: 'now' },
    desc: '서로 다른 센서 신호를 같은 실험 안에서 기록하고 비교하기 위한 연구 도구와 데이터 흐름을 정리합니다.',
  },
  {
    no: '02',
    title: '재현 가능한 실험 로그',
    badge: { label: '구축 중', variant: 'now' },
    desc: '센서 값뿐 아니라 배치, 자세, 실험 조건과 처리 단계를 함께 남기는 기록 구조를 마련하고 있습니다.',
  },
  {
    no: '03',
    title: '자세 보정과 좌표 변환 절차',
    badge: { label: '검증 중', variant: 'now' },
    desc: 'IMU 자세 정보를 ToF 거리 분포의 공간 해석에 반영하는 절차와 조건별 오차를 분석합니다.',
  },
  {
    no: '04',
    title: '카메라 비의존 사람 추적 베이스라인',
    badge: { label: '평가 중', variant: 'now' },
    desc: '거리 변화만으로 존재와 이동을 구분할 수 있는 범위와 한계를 확인하는 평가 체계를 구성하고 있습니다.',
  },
  {
    no: '05',
    title: '프라이버시 중심 데이터 활용 구조',
    badge: { label: '설계 중', variant: 'explore' },
    desc: '원시 신호, 파생 특징, 공간 상태를 구분하고 연구 목적에 맞는 보유·접근 원칙을 구체화합니다.',
  },
]

export const OUTPUTS_NOTE =
  '논문, 공개 코드, 데이터셋, 특허 또는 정량 평가 결과가 확정되면 출처와 실험 조건을 함께 추가합니다. 그 전에는 연구 기반의 구축 상태만 표시합니다.'

/* ---------- Roadmap ---------- */

export interface RoadmapPhase {
  phase: string
  en: string
  badge: Badge
  desc: string
}

export const ROADMAP: RoadmapPhase[] = [
  {
    phase: 'NOW',
    en: 'FOUNDATION',
    badge: { label: '현재 실험', variant: 'now' },
    desc: 'ToF–IMU 동기화, 자세 보정, 좌표 정합, 조건별 노이즈 분석과 사람 추적 베이스라인을 검증합니다.',
  },
  {
    phase: 'NEXT',
    en: 'MULTIMODAL UNDERSTANDING',
    badge: { label: '탐색 중', variant: 'explore' },
    desc: 'mmWave와 포인트클라우드의 보완 가능성을 비교하고, 위치 추정에서 행동·미세 움직임·비접촉 생체 신호 해석으로 연구 범위를 확장합니다.',
  },
  {
    phase: 'LATER',
    en: 'TRUSTWORTHY TRANSLATION',
    badge: { label: '향후 확장', variant: 'later' },
    desc: '데이터 최소화, 접근 제어, 활용 기록을 포함하는 공간 데이터 구조를 마련하고 프라이버시 친화적 디지털 트윈, 스마트홈, 웰니스·돌봄·안전 서비스와의 연결 가능성을 연구합니다.',
  },
]

export const ROADMAP_NOTE = '로드맵은 제품 출시 일정이 아니라 연구 의존관계와 확장 순서를 나타냅니다.'

/* ---------- Collaboration ---------- */

export const COLLAB_TOPICS = [
  '센서 배치와 멀티센서 비교 실험',
  '사람 추적 및 행동·생체 신호 알고리즘 평가',
  '프라이버시 보존형 데이터 처리와 거버넌스',
  '스마트홈·웰니스·돌봄·안전 환경 실증',
  '학생 연구 프로젝트와 공동 연구 산출물',
] as const

export const COLLAB_TEXT = {
  title: '생활공간 센싱의 다음 질문을 함께 연구합니다.',
  body: 'KHouseHold는 센서 시스템, 임베디드 구현, 신호처리, 사람 추적, 비접촉 생체·행동 모니터링, 프라이버시 보호, 디지털 트윈과 실제 생활공간 실증을 함께 설계할 대학·연구기관·기업 파트너와의 협력을 열어두고 있습니다.',
  contactNote: '공식 연락처 입력 필요',
  contactHint: '공식 이메일 주소가 확정되면 이 영역에서 바로 문의할 수 있습니다.',
} as const

/* ---------- Footer ---------- */

export const FOOTER_TEXT = {
  line1: 'KHouseHold Research — Privacy-aware sensing and spatial intelligence for everyday life.',
  line2: '연구 상태와 범위는 실험 및 검증 결과에 따라 업데이트됩니다.',
} as const
