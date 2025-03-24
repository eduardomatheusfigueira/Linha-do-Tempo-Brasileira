import { TimelineEvent, TimelinePeriod, Character, EventCategory, SourceInfo } from './types';

export const naufragosSource: SourceInfo = {
  id: 'naufragos_traficantes',
  name: 'Náufragos, Traficantes e Degredados',
  author: 'Eduardo Bueno',
  color: '#66BB6A',
  description: 'Exploração do período inicial da presença europeia no Brasil, focando em expedições, naufrágios e personagens.',
};

export const naufragosSources: SourceInfo[] = [
  naufragosSource,
];

export const naufragosEvents: TimelineEvent[] = [
  {
    id: 50001,
    year: 1501,
    title: 'Expedição de Gaspar de Lemos',
    description: 'Expedição de Gaspar de Lemos e Américo Vespúcio; reconhecimento da costa brasileira e primeiras explorações.',
    category: EventCategory.EXPLORATION,
    source: naufragosSource.name,
    characters: ['Gaspar de Lemos', 'Américo Vespúcio']
  } as TimelineEvent,
  {
    id: 50002,
    year: 1502,
    title: 'Naufrágio da Esquadra de Vespúcio',
    description: 'Naufrágio de um navio da esquadra de Américo Vespúcio na costa brasileira; possível primeiro europeu a viver entre os nativos.',
    category: EventCategory.SOCIAL,
    source: naufragosSource.name,
    characters: ['Américo Vespúcio']
  } as TimelineEvent,
  {
    id: 50003,
    year: 1509,
    title: 'Naufrágio de Navio Francês',
    description: 'Naufrágio de um navio francês na costa do Brasil; sobreviventes franceses vivem entre os indígenas.',
    category: EventCategory.SOCIAL,
    source: naufragosSource.name
  } as TimelineEvent,
  {
    id: 50004,
    year: 1511,
    title: 'Expedição Portuguesa de João de Lisboa',
    description: 'Expedição portuguesa de João de Lisboa e Estevão Froes; reconhecimento do litoral e coleta de informações.',
    category: EventCategory.EXPLORATION,
    source: naufragosSource.name,
    characters: ['João de Lisboa', 'Estevão Froes']
  } as TimelineEvent,
  {
    id: 50005,
    year: 1516,
    title: 'Chegada de Degredados e Lançamento de Cristovão Jacques',
    description: 'Chegada dos primeiros degredados portugueses ao Brasil; Cristóvão Jacques é lançado para combater o contrabando.',
    category: EventCategory.COLONIZATION,
    source: naufragosSource.name,
    characters: ['Cristóvão Jacques']
  } as TimelineEvent,
  {
    id: 50006,
    startYear: 1526,
    endYear: 1528,
    title: 'Expedições de Cristóvão Jacques',
    description: 'Novas expedições de Cristóvão Jacques para patrulhar a costa e combater navios franceses.',
    category: EventCategory.EXPLORATION,
    source: naufragosSource.name,
    characters: ['Cristóvão Jacques']
  } as TimelineEvent,
  {
    id: 50007,
    year: 1531,
    title: 'Expedição de Martim Afonso de Sousa',
    description: 'Expedição colonizadora de Martim Afonso de Sousa; início efetivo da colonização portuguesa e fundação de São Vicente.',
    category: EventCategory.COLONIZATION,
    source: naufragosSource.name,
    characters: ['Martim Afonso de Sousa']
  } as TimelineEvent,
  {
    id: 50008,
    year: 1543,
    title: 'Naufrágio de Fernão de Oliveira',
    description: 'Naufrágio do navio de Fernão de Oliveira; relato sobre o naufrágio e a vida entre os indígenas.',
    category: EventCategory.SOCIAL,
    source: naufragosSource.name,
    characters: ['Fernão de Oliveira']
  } as TimelineEvent,
  {
    id: 50009,
    year: 1555,
    title: 'Chegada de Jean de Léry',
    description: 'Chegada da expedição francesa de Jean de Léry; relatos etnográficos sobre os indígenas e a terra.',
    category: EventCategory.SOCIAL,
    source: naufragosSource.name,
    characters: ['Jean de Léry']
  } as TimelineEvent,
  {
    id: 50010,
    year: 1560,
    title: 'Aventura de Hans Staden',
    description: 'Hans Staden, aventureiro alemão, é capturado pelos Tupinambás e escreve sobre suas experiências.',
    category: EventCategory.SOCIAL,
    source: naufragosSource.name,
    characters: ['Hans Staden']
  } as TimelineEvent,
];

export const naufragosPeriods: TimelinePeriod[] = [
  {
    id: 60001,
    startYear: 1500,
    endYear: 1530,
    title: 'Reconhecimento e Primeiros Contatos',
    description: 'Período de reconhecimento da costa brasileira e estabelecimento dos primeiros contatos entre europeus e nativos.',
    source: naufragosSource.name
  } as TimelinePeriod,
  {
    id: 60002,
    startYear: 1530,
    endYear: 1600,
    title: 'Início da Colonização e Naufrágios',
    description: 'Início efetivo da colonização portuguesa e relatos de naufrágios e vivência entre os indígenas.',
    source: naufragosSource.name
  } as TimelinePeriod,
];

export const naufragosCharacters: Character[] = [
  {
    id: 'gaspar_de_lemos_ntd',
    name: 'Gaspar de Lemos',
    description: 'Comandante da expedição de 1501, responsável pelo reconhecimento da costa brasileira.',
    relatedEvents: [50001],
    source: naufragosSource.name
  },
  {
    id: 'americo_vespucio_ntd',
    name: 'Américo Vespúcio',
    description: 'Cartógrafo e explorador italiano; participou da expedição de 1501 e teve navio naufragado em 1502.',
    relatedEvents: [50001, 50002],
    source: naufragosSource.name
  },
  {
    id: 'joao_de_lisboa_ntd',
    name: 'João de Lisboa',
    description: 'Capitão da expedição portuguesa de 1511, que continuou o reconhecimento do litoral.',
    relatedEvents: [50004],
    source: naufragosSource.name
  },
  {
    id: 'cristovao_jacques_ntd',
    name: 'Cristóvão Jacques',
    description: 'Responsável por expedições de patrulhamento da costa brasileira contra contrabandistas franceses.',
    relatedEvents: [50005, 50006],
    source: naufragosSource.name
  },
  {
    id: 'martim_afonso_de_sousa_ntd',
    name: 'Martim Afonso de Sousa',
    description: 'Líder da expedição colonizadora de 1531, que iniciou a colonização efetiva do Brasil.',
    relatedEvents: [50007],
    source: naufragosSource.name
  },
  {
    id: 'fernao_de_oliveira_ntd',
    name: 'Fernão de Oliveira',
    description: 'Autor de relato sobre naufrágio e vivência entre indígenas no Brasil.',
    relatedEvents: [50008],
    source: naufragosSource.name
  },
  {
    id: 'jean_de_lery_ntd',
    name: 'Jean de Léry',
    description: 'Membro de expedição francesa; escreveu relatos etnográficos sobre os indígenas brasileiros.',
    relatedEvents: [50009],
    source: naufragosSource.name
  },
  {
    id: 'hans_staden_ntd',
    name: 'Hans Staden',
    description: 'Aventureiro alemão capturado pelos Tupinambás, autor de livro sobre suas experiências.',
    relatedEvents: [50010],
    source: naufragosSource.name
  },
];
