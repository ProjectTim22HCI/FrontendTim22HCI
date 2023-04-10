import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Country{
  constructor(
    public nameOfficial: string,
    public independent: boolean,
    public currencies: string,
    public capital: string,
    public openStreetMaps: string,
    public population: number,
    public flagPng: string,
    public coatOfArmsPng: string
  ){}
}

@Component({
  selector: 'app-countries-content',
  templateUrl: './countries-content.component.html',
  styleUrls: ['./countries-content.component.css']
})

export class CountriesContentComponent implements OnInit{

  countries: Country[] | undefined;
  constructor(
    private httpClient:HttpClient
  ){}

  ngOnInit(): void {
    this,this.getCountries();
  }

  getCountries(){
    this.httpClient.get<any>('https://restcountries.com/v3.1/all').subscribe(
      response => {
        console.log(response);
        this.countries = response;
      }
    )
  }

}
