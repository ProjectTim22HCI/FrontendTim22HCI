import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesContentComponent } from './Components/countries-content/countries-content.component';
import { CountryContentComponent } from './Components/country-content/country-content.component';
import { HomeContentComponent } from './Components/home-content/home-content.component';
import { ComparisonComponent } from './Components/comparison/comparison.component';
import { ComparisonThreeComponent } from './Components/comparison-three/comparison-three.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeContentComponent },
  { path: 'country', component: CountryContentComponent },
  { path: 'countries', component: CountriesContentComponent },
  { path: 'comparison', component: ComparisonComponent},
  { path: 'comparison-three', component: ComparisonThreeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
