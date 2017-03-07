import {Component, OnInit} from '@angular/core';
import {OffersService} from "../../services/offers.service";
import {Offer} from "../../model/Offer";
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute, Router, Params} from "@angular/router";
import {OfferDetailsComponent} from "../offer-details/offer-details.component";
import {OfferType} from "../../model/OfferType";

@Component({
    selector: 'offer-list',
    templateUrl: './offer-list.component.html',
    styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {

    private offersLoaded: boolean = false;
    private offers:Array<Offer> = Array();
    private type: string;
    private offerType: OfferType;

    constructor(private offerService:OffersService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        
        this.route.params.subscribe(params => {
            this.setType(params['type'])

            this.refresh();
        });
    }

    setType(type: string) {
        this.type = type;
    }

    refresh() {
        console.log('refresh');

        this.offerService.getOfferType(this.type).subscribe(
            values => {
                this.offerType = values;
                this.offerService.getOffers(this.type).subscribe(
                    values => {
                        this.offers = values;

                        this.offersLoaded = true;
                    },
                    error => {
                        console.log(error);
                    }
                );
            },
            error => {
                console.log(error);
            }
        );
    }

}
