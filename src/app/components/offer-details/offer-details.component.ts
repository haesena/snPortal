import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OffersService} from "../../services/offers.service";
import {Offer} from "../../model/Offer";

@Component({
    selector: 'app-offer-details',
    templateUrl: './offer-details.component.html',
    styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {

    private id: string;
    private offer: Offer;
    
    constructor(private offerService:OffersService, private route:ActivatedRoute, private router:Router) {
    }

    ngOnInit() {

        this.route.params.subscribe(params => {
            this.id = params['id'];
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

}
