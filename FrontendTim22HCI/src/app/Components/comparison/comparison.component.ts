import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/Model/Country';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit{
  countries: Country[] = [];
  keyword = 'name';

  firstCountry: Country = {
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
  };

  secondCountry: Country = {
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
  };

  constructor(private countryService: CountryService, private router: Router) {}

  ngOnInit(): void {
    this.countriesToList()
    let firstCountryName = localStorage.getItem('firstCountry');
    this.countryService.getCountryByName(firstCountryName!).subscribe((data: any) => {
      this.firstCountry = this.countryService.parseToCountry(data[0]);
    });
    let secondCountryName = localStorage.getItem('secondCountry');
    this.countryService.getCountryByName(secondCountryName!).subscribe((data: any) => {
      this.secondCountry = this.countryService.parseToCountry(data[0]);
    });
  }

  countriesToList(): void{
    this.countryService.getAllCountries().subscribe((data: any) => {
      data.forEach((element: any) => {
        let country: Country = this.countryService.parseToCountry(element);
        this.countries.push(country);
      });
    });
  }

  selectEvent(item: any) {
    localStorage.setItem('thirdCountry', item.name!);
    this.router.navigate(['comparison-three']);
  }

  showCountry(name: string){
    localStorage.setItem('countryDetails', name);
    this.router.navigate(['country']);
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e: any) {
    // do something
  }

}
