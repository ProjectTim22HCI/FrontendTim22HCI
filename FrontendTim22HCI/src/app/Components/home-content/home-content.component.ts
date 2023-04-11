import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, debounceTime, distinctUntilChanged, fromEvent, map, of, switchMap, tap } from 'rxjs';
import { Country } from 'src/app/Model/Country';
import { CountryService } from 'src/app/service/country.service';

export interface CountryResponse{
  id: number;
  name: string;
}

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent {
  countries: Country[] = [];
  keyword = 'name';

  constructor(private countryService: CountryService, private router: Router) {}

  ngOnInit(): void{
    localStorage.clear();
    this.countryService.getAllCountries().subscribe((data: any) => {
      data.forEach((element: any) => {
        let country: Country = this.countryService.parseToCountry(element);
        this.countries.push(country);
      });
    });
  }

  chooseCountry(name: string){
    localStorage.setItem('countryDetails', name);
    this.router.navigate(['country']);
  }

  selectEvent(item: any) {
    localStorage.setItem('countryDetails', item.name);
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
