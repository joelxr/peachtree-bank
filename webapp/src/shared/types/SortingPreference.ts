export enum SortingOrder {
  ASC = 'ASC',
  DESC = 'DESC',
  NONE = ''
}

export class SortingPreference {
  prop: string;
  order: SortingOrder;
}


