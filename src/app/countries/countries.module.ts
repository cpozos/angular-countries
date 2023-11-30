import { NgModule } from "@angular/core";
import { CountriesRoutingModule } from "./countries-routing.module";
import { ByCapitalComponent } from "./components/by-capital/by-capital.component";
import { ByCountryComponent } from "./components/by-country/by-country.component";
import { SharedModule } from "../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { CountriesService } from "./services/countries.service";
import { CommonModule } from "@angular/common";
import { CountriesTableComponent } from "./components/countries-table/countries-table.component";

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    CountriesTableComponent
  ],
  imports: [
    CountriesRoutingModule,
    SharedModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    CountriesService
  ]
})
export class CountriesModule {

}
