import {Component, OnInit} from '@angular/core';
import {OfferListService} from "../../services/offer-list.service";

@Component({
    selector: 'app-status-bar',
    templateUrl: './status-bar.component.html',
    styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

    private count;

    constructor(private offerListS:OfferListService) {
        this.offerListS.chosenCount$.subscribe(
            v => {
                console.log(v);
                this.count = v;
            },
            e => console.log(e)
        );
    }

    ngOnInit() {
    }

}
