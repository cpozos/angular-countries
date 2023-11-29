import { NgModule } from "@angular/core";
import { CountriesRoutingModule } from "./countries-routing.module";
import { ByCapitalComponent } from "./components/by-capital/by-capital.component";
import { ByCountryComponent } from "./components/by-country/by-country.component";

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent
  ],
  imports: [
    CountriesRoutingModule
  ]
})
export class CountriesModule {

}
