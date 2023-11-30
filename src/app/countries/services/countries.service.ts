import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private url: string = 'https://restcountries.com//v3'

  constructor(private httpClient: HttpClient) { }

  searchCapital(query: string) : Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.url}/capital/${query}`)
      .pipe(
        catchError(error => {
          console.log(error);
          return of([])
        }),
        tap(countries => console.log('Running tap')),
        map(countries =>
        {
          console.log('Running map')
          return countries;
        }),
      );
  }
}
