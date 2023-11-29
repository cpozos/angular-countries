import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ByCapitalComponent } from "./components/by-capital/by-capital.component";
import { ByCountryComponent } from "./components/by-country/by-country.component";
import { ByRegionComponent } from "./components/by-region/by-region.component";
import { CountryPageComponent } from "./pages/country-page.component";

const routes: Routes = [
  {
    path: 'by-capital',
    component: ByCapitalComponent
  },
  {
    path: 'by-country',
    component: ByCountryComponent
  },
  {
    path: 'by-region',
    component: ByRegionComponent
  },
  {
    path: 'by/:id',
    component: CountryPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CountriesRoutingModule {
}
