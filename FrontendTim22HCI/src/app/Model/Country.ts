export interface Country{
    name: string;
    independent: boolean;
    currencies: Currency[];
    capital: string;
    map: string;
    population: number;
    flag: string;
    coatOfArms: string;
    timezones: string[];
    continents: string[];
}

export interface Currency{
    name: string;
    symbol: string;
}
