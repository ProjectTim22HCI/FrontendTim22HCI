import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/Model/Country';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-comparison-three',
  templateUrl: './comparison-three.component.html',
  styleUrls: ['./comparison-three.component.css']
})
export class ComparisonThreeComponent implements OnInit{
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
  thirdCountry: Country = {
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
    let firstCountryName = localStorage.getItem('firstCountry');
    this.countryService.getCountryByName(firstCountryName!).subscribe((data: any) => {
      this.firstCountry = this.countryService.parseToCountry(data[0]);
    });
    let secondCountryName = localStorage.getItem('secondCountry');
    this.countryService.getCountryByName(secondCountryName!).subscribe((data: any) => {
      this.secondCountry = this.countryService.parseToCountry(data[0]);
    });
    let thirdCountryName = localStorage.getItem('thirdCountry');
    this.countryService.getCountryByName(thirdCountryName!).subscribe((data: any) => {
      this.thirdCountry = this.countryService.parseToCountry(data[0]);
    });

    
  }

  showCountry(name: string){
    localStorage.setItem('countryDetails', name);
    this.router.navigate(['country']);
  }

}
