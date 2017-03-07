import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

import {ESchoolApi} from './api/ESchoolApi';
import {Configuration} from './configuration';
import {OfferListComponent} from './components/offer-list/offer-list.component';

import {OffersService} from "./services/offers.service";
import {BASE_PATH} from "./variables";

import {AppRoutingModule} from './routing/app-routing.module';
import {OfferDetailsComponent} from './components/offer-details/offer-details.component';
import {OfferStartComponent} from './components/offer-start/offer-start.component';

@NgModule({
    declarations: [
        AppComponent,
        OfferStartComponent,
        OfferListComponent,
        OfferDetailsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        Configuration,
        ESchoolApi,
        OffersService,
        {provide: BASE_PATH, useValue: "http://localhost/sn/trunk/bzwu/rest/v1"}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
