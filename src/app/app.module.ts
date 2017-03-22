import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

import {ESchoolApi} from './api/ESchoolApi';
import {Configuration} from './configuration';
import {OfferListComponent} from './components/offer-list/offer-list.component';

import {OffersService} from "./services/offers.service";
import {OfferListService} from "./services/offer-list.service";
import {BASE_PATH} from "./variables";

import {AppRoutingModule} from './routing/app-routing.module';
import {OfferDetailsComponent} from './components/offer-details/offer-details.component';
import {OfferStartComponent} from './components/offer-start/offer-start.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {StatusBarComponent} from './components/status-bar/status-bar.component';

import {MaterialModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        OfferStartComponent,
        OfferListComponent,
        OfferDetailsComponent,
        RegistrationComponent,
        StatusBarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        MaterialModule
    ],
    providers: [
        Configuration,
        ESchoolApi,
        OffersService,
        OfferListService,
        {provide: BASE_PATH, useValue: "http://localhost/sn/trunk/bzwu/rest/v1"}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
