import {Injectable} from '@angular/core';
import {ESchoolApi} from "../api/ESchoolApi";
import {Configuration} from "../configuration";
import {ReplaySubject} from "rxjs/Rx";

@Injectable()
export class OffersService {

    private offerTypesObs = new ReplaySubject(1);
    private offerTypeObs = Object();
    private offersObs = Object();

    constructor(private api: ESchoolApi, private config: Configuration) {
        config.username = 'J4xRL1jhKQDoSb1T-dbadmin';
        config.password = 'S85mTESKXWfdDDbpSWJNDPyW';
    }

    getOfferTypes(forceRefresh?: boolean) {
        // If the Subject was NOT subscribed before OR if forceRefresh is requested
        if (!this.offerTypesObs.observers.length || forceRefresh) {
            this.api.eSchoolOfferTypesGet().subscribe(
                data => this.offerTypesObs.next(data),
                error => {
                    this.offerTypesObs.error(error);
                    // Recreate the Observable as after Error we cannot emit data anymore
                    this.offerTypesObs = new ReplaySubject(1);
                }
            );
        }
    
        return this.offerTypesObs;
    }

    getOfferType(type: string, forceRefresh?: boolean) {
        // If the Subject was NOT subscribed before OR if forceRefresh is requested
        if (this.offerTypeObs[type] == undefined || forceRefresh) {
            this.offerTypeObs[type] = new ReplaySubject(1);

            this.api.eSchoolOfferTypeGet(type).subscribe(
                data => this.offerTypeObs[type].next(data),
                error => {
                    this.offerTypeObs[type].error(error);
                    // Recreate the Observable as after Error we cannot emit data anymore
                    this.offerTypeObs[type] = new ReplaySubject(1);
                }
            );
        }

        return this.offerTypeObs[type];
    }

    getOffers(type: string, forceRefresh?: boolean) {

        // If the Subject was NOT subscribed before OR if forceRefresh is requested
        if (this.offersObs[type] == undefined || forceRefresh) {
            this.offersObs[type] = new ReplaySubject(1);

            this.api.eSchoolOffersGet(type).subscribe(
                data => this.offersObs[type].next(data),
                error => {
                    this.offersObs[type].error(error);
                    // Recreate the Observable as after Error we cannot emit data anymore
                    this.offersObs[type] = new ReplaySubject(1);
                }
            );
        }

        return this.offersObs[type];
    }

    getOfferDetails(id: string) {
        return this.api.eSchoolOfferGet(id);
    }
}
