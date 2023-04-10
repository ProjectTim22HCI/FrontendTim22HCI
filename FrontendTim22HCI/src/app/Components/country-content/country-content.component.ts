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
    let name = localStorage.getItem('countryDetails');
    this.countryService.getCountryByName(name!).subscribe((data: any) => {
      this.country = this.countryService.parseToCountry(data[0]);
    });
  }

  compare(): void {
    let firstCountry = localStorage.getItem('countryDetails');
    const input = document.getElementById('compare') as HTMLInputElement | null;
    const secondCountry = input?.value;
    console.log(secondCountry);
    localStorage.setItem('firstCountry', firstCountry!);
    localStorage.setItem('secondCountry', secondCountry!);
    this.router.navigate(['comparison']);
  }

}
