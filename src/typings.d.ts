type Country = {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: [string];
  tld: [string];
  currencies: {
    [key: string]: { name: string };
  };
  languages: {
    [key: string]: string;
  };
  borders: [string];
};

type Name = {
  name: string;
};
