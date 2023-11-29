import { NgModule } from "@angular/core";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { RouterModule } from "@angular/router";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { SearchBoxComponent } from "./components/search-box/search-box.component";

@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    SideBarComponent,
    SearchBoxComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    SideBarComponent,
    SearchBoxComponent
  ]
})
export class SharedModule {
}
