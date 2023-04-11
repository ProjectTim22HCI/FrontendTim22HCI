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

  public getAllCountries(): Observable<any>{
    return this.http.get<any>(environment.apiHost + "v3.1/all");
  }

  public getCountryByName(name: string): Observable<any>{
    return this.http.get<any>(environment.apiHost + "v3.1/name/" + name);
  }

  public parseToCountry(element: any): Country{
    let country: Country = {
      name: '',
      independent: '',
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
    if(element.independent == true){
      country.independent = 'YES';
    } else {
      country.independent = 'NO';
    }
    let currencies: string[] = [];
    if (element.currencies) {
      const keys = Object.keys(element.currencies);
      keys.forEach((key) => {
        currencies.push(element.currencies[key].name);
      });
    }
    country.currencies = currencies;
    country.capital = element.capital;
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
