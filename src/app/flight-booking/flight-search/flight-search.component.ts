import { Component, AnimationTransitionEvent } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from './flight.service';
import { Flight } from '../../entities/flight';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {

    public from: string = 'Hamburg';
    public to: string = 'Graz';
    public date: string = (new Date()).toISOString();
    public selectedFlight: Flight;

    get flights$() {
      return this.flightService.flights$;
    }

    setLang(lang: string) {
      this.trans.use(lang);
    }

    constructor(private trans: TranslateService, private flightService: FlightService, route: ActivatedRoute) {
        route.queryParams.subscribe((p) => {
            // console.debug('queryParams', p);
        });
    }

    // cmp.flights
    public get flights() {
        return this.flightService.flights;
    }

    public select(f: Flight): void {
        this.selectedFlight = f;
    }

    public search(): void {

        this.flightService
            .find(this.from, this.to);
        // .map(function(resp) { return resp.json() })
    }

    delay() {
      this.flightService.delay();
    }

    public disableButton(event: AnimationTransitionEvent): void {
        console.log(event);
    }
}
