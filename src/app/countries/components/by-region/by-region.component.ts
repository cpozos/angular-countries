import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
    selector: 'by-region',
    templateUrl: './by-region.component.html',
})
export class ByRegionComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {
  }

  searchByRegion(capital: string) {
    this.countriesService.searchByRegion(capital)
      .subscribe(c => this.countries = c);
  }
}
