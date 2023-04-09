import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeContentComponent } from './Components/home-content/home-content.component';
import { CountryHeaderComponent } from './Components/country-header/country-header.component';
import { CountryContentComponent } from './Components/country-content/country-content.component';
import { CountriesContentComponent } from './Components/countries-content/countries-content.component';
import { RouterModule, Routes } from '@angular/router';

const appRoute: Routes = [
  {path: 'Home', component: HomeContentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeContentComponent,
    CountryHeaderComponent,
    CountryContentComponent,
    CountriesContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
