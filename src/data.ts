/* KHouseHold — page content constants
   Copy rewritten for clarity: direct, plain Korean that anyone can follow. */

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
    badge: { variant: 'current', label: '지금 하는 일' } as Badge,
    title: 'Sensing & Spatial Tracking',
    description:
      '가구 속 센서의 신호를 믿을 수 있는 위치 정보로 바꾸고, 사람이 어디에 있고 어떻게 움직이는지 알아내는 지금의 핵심 연구입니다.',
    topics: [
      { label: 'Spatial sensing', detail: '거리·기울기 측정' },
      { label: 'People tracking', detail: '위치와 이동 경로' },
      { label: 'Sensor fusion', detail: '두 센서 기준 맞추기' },
    ],
  },
  {
    id: '02',
    badge: { variant: 'explore', label: '다음에 시도할 일' } as Badge,
    title: 'Contactless Human Understanding',
    description:
      '위치를 아는 것에서 한 발 더 나아갑니다. 쉬고 있는지, 뒤척이는지 같은 행동까지 읽을 수 있을지, 새로운 센서와 함께 살펴봅니다.',
    topics: [
      { label: 'Bio & behavior', detail: '가능성 검토 중' },
      { label: 'mmWave', detail: '보완 센서 비교' },
      { label: 'Point cloud', detail: '공간을 그리는 방법' },
    ],
  },
  {
    id: '03',
    badge: { variant: 'future', label: '끝까지 지킬 원칙' } as Badge,
    title: 'Trustworthy Spatial Intelligence',
    description:
      '데이터는 최소로 모으고 가구 안에서 처리한다는 원칙을 지키면서, 검증된 결과만 실제 생활 서비스로 연결합니다.',
    topics: [
      { label: 'Privacy-aware AI', detail: '모든 단계의 기본' },
      { label: 'Safe data use', detail: '접근 권한 관리' },
      { label: 'Digital twin', detail: '장기 목표' },
    ],
  },
]

export const WORK = [
  {
    no: 'WP 01',
    title: '두 센서의 시계 맞추기',
    body: '거리 센서와 움직임 센서는 서로 다른 박자로 신호를 보냅니다. 이 둘을 하나의 시간표에 맞춰, 나중에 다시 돌려볼 수 있게 기록합니다.',
    badge: { variant: 'current', label: '수집·검증' } as Badge,
  },
  {
    no: 'WP 02',
    title: '기울어져도 정확하게',
    body: '소파 속 센서는 기울어질 수 있습니다. 기울기 정보로 거리 측정값을 바로잡아, 어느 방향에서 재도 같은 위치를 가리키게 만듭니다.',
    badge: { variant: 'current', label: '현재 실험' } as Badge,
  },
  {
    no: 'WP 03',
    title: '사람인지 알아보기',
    body: '배경과 다르게 움직이는 거리 변화를 찾아냅니다. "여기 사람이 있다, 저쪽으로 움직였다"를 판단하는 기본 규칙을 시험하는 중입니다.',
    badge: { variant: 'progress', label: '진행 중' } as Badge,
  },
]

export const TECH_ROWS = [
  { layer: 'Sensing', now: '거리 센서 · 움직임 센서', progress: '센서 위치·조건 비교', future: 'mmWave 레이더' },
  { layer: 'Signal & Geometry', now: '시간 맞추기 · 기울기 보정', progress: '여러 센서 신호 합치기', future: '공간을 점으로 그리기' },
  { layer: 'Interpretation', now: '있다 · 어디에 · 움직인다', progress: '이동 경로 추적', future: '행동 · 컨디션 읽기' },
  { layer: 'Trust & Platform', now: '최소 수집 · 실험 기록', progress: '가구 안에서만 처리', future: '권한 관리 · 디지털 트윈' },
]

export const OUTCOMES = [
  {
    no: '01',
    title: '두 센서를 한 화면에서 보는 도구',
    body: '서로 다른 센서의 데이터를 같은 시간, 같은 공간 기준에 놓고 비교할 수 있는 실험 도구를 만들었습니다.',
    badge: { variant: 'progress', label: '고도화 중' } as Badge,
  },
  {
    no: '02',
    title: '다시 돌려볼 수 있는 실험 기록',
    body: '실험 조건과 신호를 함께 남깁니다. 나중에 누구든 같은 실험을 그대로 재현하고 검증할 수 있습니다.',
    badge: { variant: 'progress', label: '구축 중' } as Badge,
  },
  {
    no: '03',
    title: '카메라 없는 사람 감지의 출발점',
    body: '영상 없이 거리 변화만으로 "사람이 있다 / 움직인다"를 구분하는 기본 절차를 만들고 평가하고 있습니다.',
    badge: { variant: 'progress', label: '평가 중' } as Badge,
  },
  {
    no: '04',
    title: '개인정보를 지키는 연구 틀',
    body: '데이터를 모으는 순간부터 쓰는 순간까지, 최소 수집과 목적 제한을 기본 조건으로 삼는 설계 원칙을 세웠습니다.',
    badge: { variant: 'progress', label: '구체화 중' } as Badge,
  },
]

export const ROADMAP = [
  {
    phase: 'NOW · FOUNDATION',
    title: '기본기 다지기',
    body: '두 센서를 정확히 맞추고, 사람의 존재와 이동을 안정적으로 알아내는 것부터 확실하게 검증합니다.',
    badge: { variant: 'current', label: '현재 실험' } as Badge,
  },
  {
    phase: 'NEXT · EXPANSION',
    title: '읽어내는 범위 넓히기',
    body: 'mmWave 같은 새 센서를 비교해 보고, 위치를 넘어 행동과 컨디션까지 읽을 수 있을지 탐색합니다.',
    badge: { variant: 'explore', label: '탐색 중' } as Badge,
  },
  {
    phase: 'LATER · TRANSLATION',
    title: '생활 속 서비스로',
    body: '누가 언제 데이터를 볼 수 있는지 관리하는 장치를 갖추고, 스마트홈·돌봄 서비스와 연결합니다.',
    badge: { variant: 'future', label: '향후 계획' } as Badge,
  },
]

export const PRINCIPLES = [
  { n: '01', t: '꼭 필요한 것만 잽니다.', d: '카메라 대신, 목적에 맞는 가장 단순한 센서를 씁니다.' },
  { n: '02', t: '모르는 것은 모른다고 말합니다.', d: '측정이 흔들릴 수 있는 조건을 숨기지 않고 결과에 함께 적습니다.' },
  { n: '03', t: '보호 장치를 먼저 만듭니다.', d: '데이터는 가구 안에서 처리하고, 쓰임새와 접근 권한을 미리 정합니다.' },
]

export const FLOW_STAGES = [
  { step: '01 · 감지', title: '거리와 기울기를 잰다', sub: '소파 속 작은 센서 2개', meta: 'VL53L5CX 8×8 · 15Hz' },
  { step: '02 · 정리', title: '시간과 위치를 맞춘다', sub: '두 센서의 기준 통일', meta: 'Δt<20ms · quat→xyz' },
  { step: '03 · 해석', title: '사람인지 알아본다', sub: '존재와 움직임 판단', meta: 'bg-subtract · Kalman' },
  { step: '04 · 최소화', title: '결과만 남긴다', sub: '있다 / 움직인다 / 없다', meta: 'state = present / moving / away' },
]

export const CONTACT_TEXT =
  '안녕하세요. KHouseHold 연구 협력에 관해 문의드립니다.\n\n소속:\n관심 주제:\n제안 내용:'
