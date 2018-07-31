import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
//routerModule used for setting up the application level route 
import {RouterModule,Routes} from '@angular/router';

import { GlobeService} from './globe/globe.service';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegionViewComponent } from './globe/allRegions.component';
import { AllCountryComponent } from './globe/allCountries/allCountries.component';
import { CountryViewComponent } from './globe/country-view/country-view.component';
import {CountryFilter} from './globe/countryFilter.pipe';
import {PageNotFoundComponent} from './globe/pageNotFound.component';

@NgModule({

  declarations: [
    AppComponent,
    RegionViewComponent,
    AllCountryComponent,
    CountryViewComponent,
    CountryFilter,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:RegionViewComponent},
      {path:'region/:regionName',component:AllCountryComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'country/:countryCode',component:CountryViewComponent},
      {path:'currency/:currencyCode',component:AllCountryComponent},
      {path:'language/:languageCode',component:AllCountryComponent},
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [GlobeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
