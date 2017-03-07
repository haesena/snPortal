import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {AuthGuard} from './auth-guard.service';
import {OfferListComponent} from "../components/offer-list/offer-list.component";
import {OfferDetailsComponent} from "../components/offer-details/offer-details.component";
import {OfferStartComponent} from "../components/offer-start/offer-start.component";

// Page-Components


const appRoutes: Routes = [
    {
        path: ':type',
        component: OfferListComponent
    },
    {
        path: ':type/:id',
        component: OfferDetailsComponent
    },
    {
        path: '',
        pathMatch: 'full',
        component: OfferStartComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}