import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CountriesService } from "../services/countries.service";
import { switchMap } from "rxjs";
import { Country } from "../interfaces/countries.interface";

@Component({
  selector: 'country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  )
  {}

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchByAlpha(id))
      )
      .subscribe(country => {
        if (!country) this.router.navigateByUrl('');

        console.log('We have a country');
        console.log({country});
        this.country = country;
        return;
      });
  }
}
