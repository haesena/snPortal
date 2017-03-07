import {Component, OnInit} from '@angular/core';
import {OffersService} from "../../services/offers.service";
import {OfferType} from "../../model/OfferType";

@Component({
    selector: 'app-offer-start',
    templateUrl: './offer-start.component.html',
    styleUrls: ['./offer-start.component.css']
})
export class OfferStartComponent implements OnInit {

    private types: any = Array();
    
    constructor(private offerService:OffersService) {
    }

    ngOnInit() {
        this.getTypes();
    }
    
    getTypes() {
        this.offerService.getOfferTypes().subscribe(
            values => {
                this.types = values;
            },
            error => {
                console.log(error);
            }
        );
    }

}
