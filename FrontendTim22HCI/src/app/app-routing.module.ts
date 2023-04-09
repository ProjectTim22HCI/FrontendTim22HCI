import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesContentComponent } from './Components/countries-content/countries-content.component';
import { CountryContentComponent } from './Components/country-content/country-content.component';
import { HomeContentComponent } from './Components/home-content/home-content.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeContentComponent },
  { path: 'country', component: CountryContentComponent },
  { path: 'countries', component: CountriesContentComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
