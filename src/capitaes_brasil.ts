import { TimelineEvent, TimelinePeriod, Character, EventCategory, SourceInfo } from './types';

export const capitaesBrasilSource: SourceInfo = {
  id: 'capitaes_brasil',
  name: 'Capitães do Brasil',
  author: 'Jorge Caldeira',
  color: '#FF6B35',
  description: 'Eventos e personagens da história do Brasil baseados no livro "Capitães do Brasil" de Jorge Caldeira.'
};

export const capitaesBrasilEvents: TimelineEvent[] = [
  // Eventos existentes...
  {
    id: 10001,
    year: 1500,
    title: 'Chegada de Pedro Álvares Cabral ao Brasil',
    description: 'A frota de Pedro Álvares Cabral chega ao litoral da Bahia, marcando o início oficial da presença portuguesa no território que viria a ser o Brasil.',
    category: EventCategory.EXPLORATION,
    characters: ['Pedro Álvares Cabral', 'Pero Vaz de Caminha'],
    source: capitaesBrasilSource.name
  },
  // Corrigir o evento com erro de tipo (string para number)
  {
    id: 10002,
    year: 1501, // Alterado de string para number
    title: 'Expedição Exploratória de Gonçalo Coelho',
    description: 'Primeira expedição exploratória enviada por Portugal especificamente para reconhecer a costa brasileira.',
    category: EventCategory.EXPLORATION,
    characters: ['Gonçalo Coelho', 'Américo Vespúcio'],
    source: capitaesBrasilSource.name
  },
  // Outros eventos...
];

export const capitaesBrasilPeriods: TimelinePeriod[] = [
  // Períodos existentes...
];

export const capitaesBrasilCharacters: Character[] = [
  // Personagens existentes...
];
