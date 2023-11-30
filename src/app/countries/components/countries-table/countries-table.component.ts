import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'countries-table',
  templateUrl: `./countries-table.component.html`,
  styleUrl: `./countries-table.component.html`,
})
export class CountriesTableComponent {
  @Input()
  public countries: Country[] = [];
}
