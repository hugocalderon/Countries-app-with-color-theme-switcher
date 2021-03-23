import { Component, OnInit } from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countriesArray: any;
  isLoading: boolean;

  constructor(private countriesServices: CountriesService, private router: Router) {
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

  loadDetail(item: any) {
    const itemJSON = JSON.stringify(item);
    this.router.navigateByUrl('/detail', { state: {data: itemJSON} });
  }
}
