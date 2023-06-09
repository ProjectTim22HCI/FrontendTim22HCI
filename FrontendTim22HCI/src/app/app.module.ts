import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeContentComponent } from './Components/home-content/home-content.component';
import { CountryContentComponent } from './Components/country-content/country-content.component';
import { CountriesContentComponent } from './Components/countries-content/countries-content.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ComparisonComponent } from './Components/comparison/comparison.component';
import { ComparisonThreeComponent } from './Components/comparison-three/comparison-three.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

const appRoute: Routes = [
  {path: 'Home', component: HomeContentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeContentComponent,
    CountryContentComponent,
    CountriesContentComponent,
    ComparisonComponent,
    ComparisonThreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
