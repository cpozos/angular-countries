import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
    selector: 'by-country',
    templateUrl: './by-country.component.html',
})
export class ByCountryComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {
  }

  searchByCountry(capital: string) {
    console.log({ capital });
    this.countriesService.searchCapital(capital).subscribe(c => {
      this.countries = c;
      console.log({ c });
    });
  }
}
