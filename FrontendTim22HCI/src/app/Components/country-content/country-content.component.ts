import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/Model/Country';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-country-content',
  templateUrl: './country-content.component.html',
  styleUrls: ['./country-content.component.css']
})
export class CountryContentComponent implements OnInit{
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

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getCountryByName("Serbia").subscribe((data: any) => {
      this.country = this.countryService.parseToCountry(data[0]);
    });
  }

}
