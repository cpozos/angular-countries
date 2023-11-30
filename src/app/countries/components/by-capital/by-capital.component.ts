import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
    selector: 'by-capital',
    templateUrl: './by-capital.component.html',
})
export class ByCapitalComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {
  }

  searchByCapital(capital: string) {
    console.log({ capital });
    this.countriesService.searchCapital(capital).subscribe(c => {
      this.countries = c;
      console.log({ c });
    });
  }
}
