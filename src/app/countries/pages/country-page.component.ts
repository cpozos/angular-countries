import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CountriesService } from "../services/countries.service";

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

    /* Other option

    this.activatedRout.params
      .subscribe(urlParams => {
        const idFromUrl = urlParams['id'];
        this.countriesService.searchByAlpha(idFromUrl)
          .subscribe(c => {

          })
      });

    */

    this.activatedRout.params
      .subscribe(({ id }) => {
        this.countriesService.searchByAlpha(id)
          .subscribe(c => {
            console.log(c);
          })
      });
  }
}
