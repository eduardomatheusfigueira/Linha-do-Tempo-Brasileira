import { TimelineEvent, TimelinePeriod, Character, EventCategory, SourceInfo } from './types';

export const formacaoEconomicaBrasilSource: SourceInfo = {
  id: 'formacao_economica_brasil',
  name: 'Formação Econômica do Brasil',
  author: 'Celso Furtado',
  color: '#795548', // Brown 500
  description: 'Análise da formação econômica do Brasil por Celso Furtado, desde a colônia até a industrialização.'
};

export const formacaoEconomicaBrasilSources: SourceInfo[] = [
  formacaoEconomicaBrasilSource,
];

export const formacaoEconomicaBrasilEvents: TimelineEvent[] = [
  {
    id: 80001,
    year: 1500,
    month: 4,
    day: 22,
    title: 'Chegada de Cabral',
    description: 'Chegada da esquadra de Cabral a Porto Seguro; início da exploração econômica do pau-brasil.',
    category: EventCategory.ECONOMIC,
    source: formacaoEconomicaBrasilSource.name,
    characters: ['Pedro Álvares Cabral']
  } as TimelineEvent,
  {
    id: 80002,
    year: 1503,
    title: 'Primeira Feitoria',
    description: 'Construção da primeira feitoria portuguesa no Brasil, em Cabo Frio, para exploração do pau-brasil.',
    category: EventCategory.ECONOMIC,
    source: formacaoEconomicaBrasilSource.name
  } as TimelineEvent,
  {
    id: 80003,
    startYear: 1530,
    endYear: 1600,
    title: 'Ciclo do Açúcar',
    description: 'Início do ciclo do açúcar, com a introdução da cultura da cana-de-açúcar e a montagem dos primeiros engenhos.',
    category: EventCategory.ECONOMIC,
    source: formacaoEconomicaBrasilSource.name
  } as TimelineEvent,
  {
    id: 80004,
    startYear: 1550,
    endYear: 1850,
    title: 'Tráfico de Escravos',
    description: 'Intensificação do tráfico de escravos africanos para trabalhar nos engenhos de açúcar e em outras atividades econômicas.',
    category: EventCategory.ECONOMIC,
    source: formacaoEconomicaBrasilSource.name
  } as TimelineEvent,
  {
    id: 80005,
    year: 1695,
    title: 'Descoberta do Ouro',
    description: 'Descoberta de ouro em Minas Gerais, dando início ao ciclo do ouro e a uma nova fase da economia colonial.',
    category: EventCategory.ECONOMIC,
    source: formacaoEconomicaBrasilSource.name
  } as TimelineEvent,
  {
    id: 80006,
    startYear: 1700,
    endYear: 1800,
    title: 'Ciclo do Ouro',
    description: 'Apogeu do ciclo do ouro, com grande produção e exportação do metal, e desenvolvimento de Vila Rica (Ouro Preto).',
    category: EventCategory.ECONOMIC,
    source: formacaoEconomicaBrasilSource.name
  } as TimelineEvent,
  {
    id: 80007,
    year: 1729,
    title: 'Descoberta de Diamantes',
    description: 'Descoberta de diamantes em Minas Gerais, diversificando a produção mineral da colônia.',
    category: EventCategory.ECONOMIC,
    source: formacaoEconomicaBrasilSource.name
  } as TimelineEvent,
  {
    id: 80008,
    year: 1763,
    title: 'Transferência da Capital',
    description: 'Transferência da capital para o Rio de Janeiro, porto de escoamento do ouro e centro econômico da colônia.',
    category: EventCategory.ECONOMIC,
    source: formacaoEconomicaBrasilSource.name
  } as TimelineEvent,
  {
    id: 80009,
    year: 1785,
    title: 'Alvará de D. Maria I',
    description: 'Alvará de D. Maria I proíbe manufaturas no Brasil, consolidando o pacto colonial e a dependência econômica.',
    category: EventCategory.ECONOMIC,
    source: formacaoEconomicaBrasilSource.name,
    characters: ['D. Maria I']
  } as TimelineEvent,
  {
    id: 80010,
    year: 1808,
    title: 'Abertura dos Portos',
    description: 'Abertura dos portos às nações amigas, medida de D. João VI que rompe o pacto colonial e dinamiza o comércio.',
    category: EventCategory.ECONOMIC,
    source: formacaoEconomicaBrasilSource.name,
    characters: ['D. João VI']
  } as TimelineEvent,
  {
    id: 80011,
    year: 1810,
    title: 'Tratados de 1810',
    description: 'Tratados de 1810 com a Inglaterra, que estabelecem tarifas preferenciais para produtos ingleses e aprofundam a dependência.',
    category: EventCategory.ECONOMIC,
    source: formacaoEconomicaBrasilSource.name
  } as TimelineEvent,
  {
    id: 80012,
    startYear: 1820,
    endYear: 1900,
    title: 'Ciclo do Café',
    description: 'Início do ciclo do café, com expansão da cultura no Sudeste e ascensão do café como principal produto de exportação.',
    category: EventCategory.ECONOMIC,
    source: formacaoEconomicaBrasilSource.name
  } as TimelineEvent,
  {
    id: 80013,
    year: 1844,
    title: 'Tarifa Alves Branco',
    description: 'Tarifa Alves Branco eleva as tarifas de importação, visando proteger a nascente indústria brasileira.',
    category: EventCategory.ECONOMIC,
    source: formacaoEconomicaBrasilSource.name
  } as TimelineEvent,
  {
    id: 80014,
    year: 1850,
    title: 'Lei Eusébio de Queirós',
    description: 'Lei Eusébio de Queirós proíbe o tráfico negreiro, pressionada pela Inglaterra, marcando o início do fim da escravidão.',
    category: EventCategory.LEGISLATION,
    source: formacaoEconomicaBrasilSource.name,
    characters: ['Eusébio de Queirós']
  } as TimelineEvent,
  {
    id: 80015,
    year: 1888,
    month: 5,
    day: 13,
    title: 'Abolição da Escravidão',
    description: 'Abolição da escravidão com a Lei Áurea, impactando a economia e a estrutura social do país.',
    category: EventCategory.LEGISLATION,
    source: formacaoEconomicaBrasilSource.name
  } as TimelineEvent,
  {
    id: 80016,
    startYear: 1889,
    endYear: 1930,
    title: 'República Velha',
    description: 'República Velha, marcada pela economia agroexportadora, com o café como principal produto, e pela política do café com leite.',
    category: EventCategory.ECONOMIC,
    source: formacaoEconomicaBrasilSource.name
  } as TimelineEvent,
  {
    id: 80017,
    year: 1930,
    title: 'Revolução de 1930',
    description: 'Revolução de 1930 marca a crise da economia agroexportadora e o início da industrialização e diversificação econômica.',
    category: EventCategory.ECONOMIC,
    source: formacaoEconomicaBrasilSource.name
  } as TimelineEvent,
  {
    id: 80018,
    startYear: 1930,
    endYear: 1945,
    title: 'Era Vargas',
    description: 'Era Vargas, período de industrialização, criação de empresas estatais e políticas de desenvolvimento econômico.',
    category: EventCategory.ECONOMIC,
    source: formacaoEconomicaBrasilSource.name,
    characters: ['Getúlio Vargas']
  } as TimelineEvent,
  {
    id: 80019,
    year: 1942,
    title: 'Criação da CSN',
    description: 'Criação da Companhia Siderúrgica Nacional (CSN), marco da industrialização de base no Brasil.',
    category: EventCategory.ECONOMIC,
    source: formacaoEconomicaBrasilSource.name
  } as TimelineEvent,
];

export const formacaoEconomicaBrasilPeriods: TimelinePeriod[] = [
  {
    id: 90001,
    startYear: 1500,
    endYear: 1530,
    title: 'Período Pré-Colonial',
    description: 'Período inicial da presença portuguesa, marcado pela exploração do pau-brasil.',
    source: formacaoEconomicaBrasilSource.name
  } as TimelinePeriod,
  {
    id: 90002,
    startYear: 1530,
    endYear: 1700,
    title: 'Brasil Açucareiro',
    description: 'Ciclo do açúcar, principal atividade econômica colonial, baseada na monocultura e escravidão.',
    source: formacaoEconomicaBrasilSource.name
  } as TimelinePeriod,
  {
    id: 90003,
    startYear: 1700,
    endYear: 1800,
    title: 'Brasil Minerador',
    description: 'Ciclo do ouro, período de grande produção aurífera e desenvolvimento urbano em Minas Gerais.',
    source: formacaoEconomicaBrasilSource.name
  } as TimelinePeriod,
  {
    id: 90004,
    startYear: 1820,
    endYear: 1930,
    title: 'Brasil Cafeeiro',
    description: 'Ciclo do café, expansão da cultura no século XIX e XX, e consolidação da economia agroexportadora.',
    source: formacaoEconomicaBrasilSource.name
  } as TimelinePeriod,
  {
    id: 90005,
    startYear: 1930,
    endYear: 1945,
    title: 'Início da Industrialização',
    description: 'Primeiras décadas da industrialização brasileira, com a Era Vargas e a criação da indústria de base',
    source: formacaoEconomicaBrasilSource.name
  } as TimelinePeriod,
];

export const formacaoEconomicaBrasilCharacters: Character[] = [
  {
    id: 'pedro_alvares_cabral_feb',
    name: 'Pedro Álvares Cabral',
    description: 'Comandante da esquadra portuguesa que chegou ao Brasil em 1500.',
    relatedEvents: [80001],
    source: formacaoEconomicaBrasilSource.name
  },
  {
    id: 'd_maria_i_feb',
    name: 'D. Maria I',
    description: 'Rainha de Portugal que proibiu manufaturas no Brasil em 1785.',
    relatedEvents: [80009],
    source: formacaoEconomicaBrasilSource.name
  },
  {
    id: 'd_joao_vi_feb',
    name: 'D. João VI',
    description: 'Príncipe Regente e Rei de Portugal que abriu os portos do Brasil em 1808.',
    relatedEvents: [80010],
    source: formacaoEconomicaBrasilSource.name
  },
  {
    id: 'eusebio_de_queiros_feb',
    name: 'Eusébio de Queirós',
    description: 'Ministro da Justiça que propôs a lei que proibiu o tráfico negreiro em 1850.',
    relatedEvents: [80014],
    source: formacaoEconomicaBrasilSource.name
  },
  {
    id: 'getulio_vargas_feb',
    name: 'Getúlio Vargas',
    description: 'Presidente do Brasil na Era Vargas, período de industrialização e desenvolvimento.',
    relatedEvents: [80018],
    source: formacaoEconomicaBrasilSource.name
  }
];
