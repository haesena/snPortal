import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class OfferListService {

    private chosenOffers: Array<string> = new Array();
    private offerURLs: any = new Object();

    private _chosenCount = new BehaviorSubject(0);
    public chosenCount$ = this._chosenCount.asObservable();

    constructor() {

    }

    offerIsChosen(offerID: string): boolean {
        if(this.chosenOffers.indexOf(offerID) > -1) {
            return true;
        } else {
            return false;
        }
    }

    addOffer(offerID:string, offerURL:string) {
        if(!this.offerIsChosen(offerID)) {
            this.chosenOffers.push(offerID);
            this._chosenCount.next(this.chosenOffers.length);
        }

        this.offerURLs[offerID] = offerURL;
    }

    removeOffer(offerID: string) {
        if(this.offerIsChosen(offerID)) {
            let i = this.chosenOffers.indexOf(offerID);
            this.chosenOffers.splice(i, 1);
            this._chosenCount.next(this.chosenOffers.length);
        }
    }

}
