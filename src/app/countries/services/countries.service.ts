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

  searchByAlpha(alpha: string) : Observable<Country | null> {
    return this.httpClient.get<Country[]>(`${this.url}/alpha/${alpha}`)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(error => of(null))
      );
  }

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

  searchByCountry(country: string) : Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.url}/name/${country}`)
      .pipe(catchError(error => of([])));
  }

  searchByRegion(region: string) : Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.url}/region/${region}`)
      .pipe(catchError(error => of([])));
  }
}
