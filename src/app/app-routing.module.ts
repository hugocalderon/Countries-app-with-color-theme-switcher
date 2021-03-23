import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailComponent} from './components/detail/detail.component';
import {CountriesComponent} from './components/countries/countries.component';

const routes: Routes = [
  {path : '', component: CountriesComponent},
  {path: 'detail', component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
