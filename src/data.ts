/* KHouseHold — page content constants (from design handoff UI kit) */

export type BadgeVariant = 'current' | 'progress' | 'explore' | 'future'

export interface Badge {
  variant: BadgeVariant
  label: string
}

export const NAV_ITEMS = [
  { id: 'livinglab', label: 'Living Lab' },
  { id: 'vision', label: 'Vision' },
  { id: 'experiments', label: 'Now' },
  { id: 'tracks', label: 'Programs' },
  { id: 'technology', label: 'Methods' },
  { id: 'roadmap', label: 'Roadmap' },
]

export const PROGRAMS = [
  {
    id: '01',
    badge: { variant: 'current', label: '현재 중심' } as Badge,
    title: 'Sensing & Spatial Tracking',
    description:
      '생활공간의 거리와 자세 신호를 신뢰할 수 있는 좌표로 만들고, 사람의 존재와 이동을 추정하는 현재 핵심 프로그램입니다.',
    topics: [
      { label: 'Spatial sensing', detail: 'ToF/IMU' },
      { label: 'People tracking', detail: '위치·궤적' },
      { label: 'Sensor fusion', detail: '시간·좌표 정합' },
    ],
  },
  {
    id: '02',
    badge: { variant: 'explore', label: '탐색 확장' } as Badge,
    title: 'Contactless Human Understanding',
    description:
      '현재 추적 기반 위에서 행동·휴식·미세 움직임을 해석하고, mmWave와 포인트클라우드의 보완 가능성을 비교합니다.',
    topics: [
      { label: 'Bio & behavior', detail: '가능성 검토' },
      { label: 'mmWave', detail: '비교 센싱' },
      { label: 'Point cloud', detail: '공간 표현' },
    ],
  },
  {
    id: '03',
    badge: { variant: 'future', label: '상시 원칙·장기' } as Badge,
    title: 'Trustworthy Spatial Intelligence',
    description:
      '데이터 최소화와 엣지 처리를 모든 단계의 원칙으로 삼고, 검증된 상태 정보를 안전한 디지털 트윈과 생활환경 서비스로 번역합니다.',
    topics: [
      { label: 'Privacy-aware AI', detail: '상시 원칙' },
      { label: 'Safe data use', detail: '접근·감사' },
      { label: 'Digital twin', detail: '장기 적용' },
    ],
  },
]

export const WORK = [
  {
    no: 'WP 01',
    title: '시간 동기화',
    body: '서로 다른 주기의 ToF·IMU 신호를 공통 시간축에 정렬하고 재현 가능한 로그로 기록합니다.',
    badge: { variant: 'current', label: '수집·검증' } as Badge,
  },
  {
    no: 'WP 02',
    title: '자세 보정과 좌표 변환',
    body: '센서 회전·방향 정보를 이용해 거리 분포를 일관된 공간 좌표로 변환합니다.',
    badge: { variant: 'current', label: '현재 실험' } as Badge,
  },
  {
    no: 'WP 03',
    title: '사람 추적 베이스라인',
    body: '배경과 다른 연속 거리 변화를 찾아 존재와 이동 궤적을 추정하는 기초 로직을 평가합니다.',
    badge: { variant: 'progress', label: '진행 중' } as Badge,
  },
]

export const TECH_ROWS = [
  { layer: 'Sensing', now: 'VL53L5CX · BNO08X', progress: '센서 배치·조건 비교', future: 'mmWave' },
  { layer: 'Signal & Geometry', now: '시간 동기화 · 자세 보정', progress: '좌표 변환 · 다중 센서 정합', future: 'Point cloud' },
  { layer: 'Interpretation', now: '존재 · 위치 · 이동', progress: '추적 베이스라인', future: '행동 · 생체 맥락' },
  { layer: 'Trust & Platform', now: '데이터 최소화 · 실험 로그', progress: '엣지 우선 처리 원칙', future: '거버넌스 · Digital twin' },
]

export const OUTCOMES = [
  {
    no: '01',
    title: 'ToF·IMU 통합 실험 파이프라인',
    body: '센서별 데이터를 같은 시간과 공간 기준에서 비교하기 위한 수집·정렬·변환 구조',
    badge: { variant: 'progress', label: '고도화 중' } as Badge,
  },
  {
    no: '02',
    title: '재현 가능한 센서 데이터 기록',
    body: '실험 조건과 신호를 함께 남겨 알고리즘 비교와 후속 검증에 활용하는 로그 구조',
    badge: { variant: 'progress', label: '구축 중' } as Badge,
  },
  {
    no: '03',
    title: '카메라 비의존 추적 베이스라인',
    body: '멀티존 거리 변화만으로 존재와 이동을 구분하기 위한 기초 평가 절차',
    badge: { variant: 'progress', label: '평가 중' } as Badge,
  },
  {
    no: '04',
    title: '프라이버시 중심 연구 프레임',
    body: '수집에서 활용까지 데이터 최소화와 목적 제한을 핵심 조건으로 다루는 설계 원칙',
    badge: { variant: 'progress', label: '구체화 중' } as Badge,
  },
]

export const ROADMAP = [
  {
    phase: 'NOW · FOUNDATION',
    title: '측정 기반과 추적 베이스라인',
    body: 'ToF·IMU 정합, 자세 보정, 환경별 노이즈 분석, 사람 존재·이동 추정을 우선 검증합니다.',
    badge: { variant: 'current', label: '현재 실험' } as Badge,
  },
  {
    phase: 'NEXT · EXPANSION',
    title: '멀티센서와 상태 해석',
    body: 'mmWave·포인트클라우드의 보완 가능성을 비교하고 행동·생체 맥락 해석의 범위를 탐색합니다.',
    badge: { variant: 'explore', label: '탐색 중' } as Badge,
  },
  {
    phase: 'LATER · TRANSLATION',
    title: '안전한 공간 지능',
    body: '접근 제어와 감사를 포함한 데이터 활용 구조를 마련하고 디지털 트윈·생활 서비스와 연결합니다.',
    badge: { variant: 'future', label: '향후 확장' } as Badge,
  },
]

export const PRINCIPLES = [
  { n: '01', t: '필요한 것만 측정합니다.', d: '카메라 의존을 낮추고 목적에 맞는 최소 신호를 선택합니다.' },
  { n: '02', t: '불확실성을 포함해 해석합니다.', d: '센서 조건과 환경 차이를 숨기지 않고 평가에 반영합니다.' },
  { n: '03', t: '보호 원칙을 먼저 설계합니다.', d: '엣지 처리, 목적 제한, 접근 통제를 연구 구조에 포함합니다.' },
]

export const FLOW_STAGES = [
  { step: '01 · INPUT', title: '거리 + 자세', sub: 'ToF · IMU', meta: 'VL53L5CX 8×8 · 15Hz' },
  { step: '02 · ALIGN', title: '시간 + 좌표', sub: 'Sync · Transform', meta: 'Δt<20ms · quat→xyz' },
  { step: '03 · INFER', title: '존재 + 이동', sub: 'Detect · Track', meta: 'bg-subtract · Kalman' },
  { step: '04 · MINIMIZE', title: '필요한 상태만', sub: 'Privacy-aware output', meta: 'state = present / moving / away' },
]

export const CONTACT_TEXT =
  '안녕하세요. KHouseHold 연구 협력에 관해 문의드립니다.\n\n소속:\n관심 주제:\n제안 내용:'
