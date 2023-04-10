import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/Model/Country';
import { CountryService } from 'src/app/service/country.service';


@Component({
  selector: 'app-countries-content',
  templateUrl: './countries-content.component.html',
  styleUrls: ['./countries-content.component.css']
})

export class CountriesContentComponent implements OnInit{

  countries: Country[] | undefined;

  constructor(
    private countryService : CountryService
  ){}

  ngOnInit(){
    // this.getAllCountries();
  }

  // getAllCountries() : Observable<Country[]>{

  //   return this.countryService.getAllCountries();
  //   }
}
