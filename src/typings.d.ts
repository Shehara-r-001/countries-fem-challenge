type Country = {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: [string];
  tld: [string];
  currencies: object;
  languages: object;
};
