import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CountriesService} from '../../services/countries.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  item: any;
  isLoading: boolean;

  constructor(private router: Router, private countriesServices: CountriesService) {
    this.isLoading = false;
  }

  ngOnInit(): void {
    this.item = JSON.parse(history.state.data);
  }

  searchByCodeISO(code: string): void {
    this.isLoading = true;
    this.countriesServices.getByCodeISO(code)
      .then(item => {
        this.isLoading = false;
        this.item = JSON.parse(JSON.stringify(item));
      })
      .catch(error => console.log(error));
  }
}
