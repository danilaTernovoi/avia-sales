export interface ITicketSegment {
  // Код города (iata)
  origin: string;
  // Код города (iata)
  destination: string;
  // Дата и время вылета туда
  date: string;
  // Массив кодов (iata) городов с пересадками
  stops: string[];
  // Общее время перелёта в минутах
  duration: number;
}

export interface ITicket {
  // Цена в рублях
  price: number;
  // Код авиакомпании (iata)
  carrier: string;
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [ITicketSegment, ITicketSegment];
}

export interface IBuildTime {
  duration: string;
  fromto: string;
}

// eslint-disable-next-line no-unused-vars
export type FilterCallback = (ticket: ITicket) => boolean;

export interface IFilter {
  alias: string;
  showName: string;
  active: boolean;
  callback: FilterCallback;
}

export interface Tab {
  alias: SortGuard;
  active: boolean;
  showName: string;
}

export type FilterType = IFilter;

export type SortGuard = 'priceless' | 'timeless';
