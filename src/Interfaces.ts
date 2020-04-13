export interface KeywordInterface {
  id: string;
  data: string;
}

export interface StateInterface {
  keywords: Array<KeywordInterface>;
  filtered: Array<KeywordInterface>;
  loading: boolean;
}

export interface SearchBarInterface {
  label: string;
  a11y: string;
}

export interface FilterWrapperInterface {
  endpoint: string;
}
