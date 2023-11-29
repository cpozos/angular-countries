import { NgModule } from "@angular/core";
import { CountriesRoutingModule } from "./countries-routing.module";
import { ByCapitalComponent } from "./components/by-capital/by-capital.component";
import { ByCountryComponent } from "./components/by-country/by-country.component";
import { SharedModule } from "../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { CountriesService } from "./services/countries.service";

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent
  ],
  imports: [
    CountriesRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    CountriesService
  ]
})
export class CountriesModule {

}
