import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OffersService} from "../../services/offers.service";
import {OfferListService} from "../../services/offer-list.service";
import {Offer} from "../../model/Offer";

@Component({
    selector: 'app-offer-details',
    templateUrl: './offer-details.component.html',
    styleUrls: ['./offer-details.component.css'],
})
export class OfferDetailsComponent implements OnInit {

    private id: string;
    private isChosen: boolean = false;
    private offer: Offer;
    
    constructor(private offerService:OffersService, private offerListS: OfferListService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {

        this.route.params.subscribe(params => {
            this.id = params['id']
            this.isChosen = this.offerListS.offerIsChosen(this.id);
        });

        this.offerService.getOfferDetails(this.id).subscribe(
            values => {
                this.offer = values;
            },
            error => {
                console.log(error);
            }
        );
    }

    chooseOffer() {
        this.offerListS.addOffer(this.offer.id, this.router.url);
        this.isChosen = true;
    }

    removeOffer() {
        this.offerListS.removeOffer(this.offer.id);
        this.isChosen = false;
    }

    goBack() {
        this.router.navigate([".."], { relativeTo: this.route })
    }

}
