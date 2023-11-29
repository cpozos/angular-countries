import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
    selector: 'by-capital',
    templateUrl: './by-capital.component.html',
})
export class ByCapitalComponent {

  constructor(private countriesService: CountriesService) {
  }

  searchByCapital(capital: string) {
    console.log({ capital });
    this.countriesService.searchCapital(capital);
  }
}
