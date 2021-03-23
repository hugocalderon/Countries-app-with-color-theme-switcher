import { Component } from '@angular/core';
import {CountriesService} from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Myapp';
  countriesArray: any;
  isLoading: boolean;

  constructor(private countriesServices: CountriesService) {
    this.isLoading = false;
  }

  ngOnInit(){
    this.loadAllCountries();
  }

  loadAllCountries(): void{
    this.isLoading = true;
    this.countriesServices.getAll()
      .then(item => {
        this.isLoading = false;
        this.countriesArray = item;
      })
      .catch(error => console.log(error));
  }

  searchByname($event) {
    this.countriesServices.getByCountry($event.target.value)
      .then(item => {
        this.countriesArray = item;
      })
      .catch(error => console.log(error));
  }

  searchByRegion($event): void {
    this.isLoading = true;
    if ($event.target.value != 'all'){
      this.countriesServices.getByRegion($event.target.value)
        .then(item => {
          this.isLoading = false;
          this.countriesArray = item;
        })
        .catch(error => console.log(error));
    } else {
      this.loadAllCountries();
    }
  }
}
