import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CountriesService } from "../services/countries.service";
import { switchMap } from "rxjs";

@Component({
  selector: 'country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent implements OnInit {

  constructor(
    private activatedRout: ActivatedRoute,
    private countriesService: CountriesService) {
  }

  ngOnInit(): void {

    this.activatedRout.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchByAlpha(id))
      )
      .subscribe(countries => console.log(countries));
  }
}
