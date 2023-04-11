import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/Model/Country';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-country-content',
  templateUrl: './country-content.component.html',
  styleUrls: ['./country-content.component.css']
})
export class CountryContentComponent implements OnInit{
  countries: Country[] = [];
  keyword = 'name';
  country: Country = {
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

  constructor(private countryService: CountryService, private router: Router) {}

  ngOnInit(): void {
    this.countriesToList();
    let name = localStorage.getItem('countryDetails');
    this.countryService.getCountryByName(name!).subscribe((data: any) => {
      this.country = this.countryService.parseToCountry(data[0]);
    }
    );
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
    let firstCountry = localStorage.getItem('countryDetails');
    localStorage.setItem('firstCountry', firstCountry!);
    localStorage.setItem('secondCountry', item.name!);
    this.router.navigate(['comparison']);
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e: any) {
    // do something
  }

}
