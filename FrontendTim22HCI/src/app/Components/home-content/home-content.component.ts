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
  keyword = 'name';

  // constructor(
  //   private countryService: CountryService, 
  //   private router: Router) {
  //   // this.pushCountryName();
  //   // this.searchedCountries = this.countries;
  //   }

  public countries = [
    {
      id: 1,
      name: 'Albania',
    },
    {
      id: 2,
      name: 'Belgium',
    },
    {
      id: 3,
      name: 'Denmark',
    },
    {
      id: 4,
      name: 'Montenegro',
    },
    {
      id: 5,
      name: 'Turkey',
    },
    {
      id: 6,
      name: 'Ukraine',
    },
    {
      id: 7,
      name: 'Macedonia',
    },
    {
      id: 8,
      name: 'Slovenia',
    },
    {
      id: 9,
      name: 'Georgia',
    },
    {
      id: 10,
      name: 'India',
    },
    {
      id: 11,
      name: 'Russia',
    },
    {
      id: 12,
      name: 'Switzerland',
    }
  ];

  // ngOnInit(): void{
  //   this.pushCountryName();
  //   // this.searchedCountries = this.countries;
  //   // this.countrySearch();
  // }

  // pushCountryName():void{
  //   localStorage.clear();
  //   this.countryService.getAllCountries().subscribe((data: any) => {
  //     data.forEach((element: any) => {
  //       let country: Country = this.countryService.parseToCountry(element);
  //       this.countries.push(country.name);
  //     });
  //   });
  // }
    selectEvent(item: any) {
    // do something with selected item
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e: any) {
    // do something
  }



  // @ViewChild('countrySearchInput') countrySearchInput!: ElementRef;
  // @Output() setCounryNameEvent = new EventEmitter<{name: string}>()

  // countries: any[] = [];
  // showSearches: boolean = false;
  // isSearching:boolean = false;
  // searchedCountries: any = [];

  // constructor(
  //   private countryService: CountryService, 
  //   private router: Router) {
  //   this.pushCountryName();
  //   this.searchedCountries = this.countries;
  //   }
  // // constructor() {
  // //   this.countries = ['Audi', 'BMW', 'Bugatti', 'Ferrari', 'Ford', 'Lamborghini', 'Mercedes Benz', 'Porsche', 'Rolls-Royce', 'Volkswagen'];
  // //   this.searchedCountries = this.countries;
  // // }


  // ngOnInit(): void{
  //   // this.pushCountryName();
  //   // this.searchedCountries = this.countries;
  //   this.countrySearch();
  // }

  // pushCountryName():void{
  //   localStorage.clear();
  //   this.countryService.getAllCountries().subscribe((data: any) => {
  //     data.forEach((element: any) => {
  //       let country: Country = this.countryService.parseToCountry(element);
  //       this.countries.push(country.name);
  //     });
  //   });
  // }

  // getCountries(name: string): Observable<any> {
  //   return of(this.filterCountries(name))
  // }

  // filterCountries(name: string) {
  //   return this.countries.filter((val) => val.toLowerCase().includes(name.toLowerCase()) == true )
  // }

  // countrySearch() {
    
  //   // Adding keyup Event Listerner on input field
  //   const search$ = fromEvent(this.countrySearchInput?.nativeElement, 'keyup').pipe(
  //     map((event: any) => event.target.value),
  //     debounceTime(500),  
  //     distinctUntilChanged(),
  //     tap(()=> this.isSearching = true),
  //     switchMap((term) => term ? this.getCountries(term) : of<any>(this.countries)),
  //     tap(() => {
  //       this.isSearching = false,
  //       this.showSearches = true;
  //     }));

  //     search$.subscribe(data => {
  //       this.isSearching = false
  //       this.searchedCountries = data;
  //     })
  // }

  // setCountryName(name: string) {
  //   this.searchedCountries = this.filterCountries(name);
  //   this.setCounryNameEvent.emit({name});
  //   this.countrySearchInput.nativeElement.value = name;
  //   this.showSearches = false;
  // }

  // trackById(index: any,item: { _id: void; }):void{
  //   return item._id;
  // }

  

}
