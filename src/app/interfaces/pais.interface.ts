export interface PaisInterface {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc?: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: Gini;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

interface PostalCode {
  format: string;
  regex: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface CoatOfArms {
  png?: string;
  svg?: string;
}

interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

interface Car {
  signs: string[];
  side: string;
}

interface Gini {
  '2019'?: number;
  '2014'?: number;
  '2006'?: number;
  '2018'?: number;
  '2017'?: number;
  '1999'?: number;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

interface Eng {
  f: string;
  m: string;
}

interface Translations {
  ara: Spa;
  bre: Spa;
  ces: Spa;
  cym: Spa;
  deu: Spa;
  est: Spa;
  fin: Spa;
  fra: Spa;
  hrv: Spa;
  hun: Spa;
  ita: Spa;
  jpn: Spa;
  kor: Spa;
  nld: Spa;
  per: Spa;
  pol: Spa;
  por: Spa;
  rus: Spa;
  slk: Spa;
  spa: Spa;
  srp: Spa;
  swe: Spa;
  tur: Spa;
  urd: Spa;
  zho: Spa;
}

interface Languages {
  spa: string;
  aym?: string;
  que?: string;
  grn?: string;
  eng?: string;
  cha?: string;
  fra?: string;
  por?: string;
  ber?: string;
  mey?: string;
  bjz?: string;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Currencies {
  COP?: COP;
  PEN?: COP;
  HNL?: COP;
  ARS?: COP;
  USD?: COP;
  PAB?: COP;
  CUC?: COP;
  CUP?: COP;
  CRC?: COP;
  XAF?: COP;
  UYU?: COP;
  DZD?: COP;
  MAD?: COP;
  MRU?: COP;
  NIO?: COP;
  VES?: COP;
  EUR?: COP;
  DOP?: COP;
  CLP?: COP;
  GTQ?: COP;
  BOB?: COP;
  BZD?: COP;
  MXN?: COP;
  PYG?: COP;
}

interface COP {
  name: string;
  symbol: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface NativeName {
  spa: Spa;
  aym?: Spa;
  que?: Spa;
  grn?: Spa;
  eng?: Spa;
  cha?: Spa;
  fra?: Spa;
  por?: Spa;
  ber?: Spa;
  mey?: Spa;
  bjz?: Spa;
}

interface Spa {
  official: string;
  common: string;
}