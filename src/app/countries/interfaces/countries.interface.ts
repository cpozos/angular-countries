export interface Country {
  name: CountryName,
  flags: string[],
  population: number,
  cca3: string,
  translations: { [key:string]: CountryTranslation }
}

export interface CountryName {
  common: string
}

export interface CountryTranslation {
  official: string;
  common:   string;
}
