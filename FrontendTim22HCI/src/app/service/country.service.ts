import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private value$ = new BehaviorSubject<any>({});
  selectedValue$ = this.value$.asObservable();

  constructor(private http: HttpClient) { }

  setValue(test: any) {
    this.value$.next(test);
  }

  getAllCountries(): Observable<any> {
    return this.http.get<any>(environment.apiHost + "v3.1/all")
  }

  getCountryByName(name: string): Observable<any> {
    return this.http.get<any>(environment.apiHost + "v3.1/name/" + name)
  }
}
