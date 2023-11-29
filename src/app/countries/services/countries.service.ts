import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private url: string = 'https://restcountries.com//v3'

  constructor(private httpClient: HttpClient) { }

  searchCapital(query: string) : Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.url}/capital/${query}`);
  }
}
