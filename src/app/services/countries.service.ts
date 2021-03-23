import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  barseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.barseUrl = 'https://restcountries.eu/rest/v2';
  }

  getAll(): Promise<any[]> {
    return this.httpClient.get<any>(this.barseUrl.concat('/all')).toPromise();
  }

  getByCountry(name: string): Promise<any> {
    return this.httpClient.get<any>(`${this.barseUrl}/name/${name}`).toPromise();
  }

  getByRegion(region: string): Promise<any> {
    return this.httpClient.get<any>(`${this.barseUrl}/region/${region}`).toPromise();
  }
}
