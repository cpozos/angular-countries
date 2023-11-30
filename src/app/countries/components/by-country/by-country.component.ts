import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';

@Component({
    selector: 'by-country',
    templateUrl: './by-country.component.html',
})
export class ByCountryComponent {
  public countries: Country[] = [];
}
