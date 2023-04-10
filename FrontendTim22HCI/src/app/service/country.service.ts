import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../Model/Country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private http: HttpClient) { }

  public getAllCountries(): Observable<Country[]>{
    let countries: Country[] = [];
    this.http.get(environment.apiHost + "v3.1/all").subscribe((all: any) => {
      all.forEach((element: any) => {
        let country: Country = this.parseToCountry(element);
        countries.push(country);
      });
    });
    return of(countries);
  }

  public getCountryByName(name: string): Observable<Country>{
    let country: Country = {} as Country;
    this.http.get(environment.apiHost + "v3.1/name/" + name).subscribe((element: any) => {
      country = this.parseToCountry(element);
    });
    return of(country);
  }

  private parseToCountry(element: any): Country{
    let country: Country = {
      name: '',
      independent: false,
      currencies: [],
      capital: '',
      map: '',
      population: 0,
      flag: '',
      coatOfArms: '',
      timezones: [],
      continents: [],
      languages: []
    }
    country.name = element.name.common;
    country.independent = element.independent;
    let currencies: string[] = [];
    if (element.currencies) {
      const keys = Object.keys(element.currencies);
      keys.forEach((key) => {
        currencies.push(element.currencies[key].name);
      });
    }
    country.currencies = currencies;
    country.capital = element.capital[0];
    country.map = element.maps.openStreetMaps;
    country.population = element.population;
    country.flag = element.flags.png;
    country.coatOfArms = element.coatOfArms.png;
    country.timezones = element.timezones;
    country.continents = element.continents;
    let languages: string[] = [];
    for (let language in element.languages) {
      languages.push(element.languages[language]);
    }
    country.languages = languages;
    return country;
  }
}
