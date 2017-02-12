import { Injectable, Inject } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { BASE_URL } from '../../app.tokens';
import { Observable } from 'rxjs/Observable';
import { Flight } from '../../entities/flight';
import { OAuthService } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';

@Injectable()
export class FlightService {

    public flights: Array<Flight> = [];
    public flights$ = new Subject<Flight[]>();

    constructor(private oauthService: OAuthService,
                private http: Http,
                @Inject(BASE_URL) private baseUrl: string) {
    }

    public delay() {

      const ONE_MINUTE = 1000 * 60;

      let oldFlights = this.flights;
      let oldFlight = this.flights[0];
      let oldFlightDate = new Date(oldFlight.date);

      let newFlightDate = new Date(oldFlightDate.getTime() + ONE_MINUTE * 15);

      let newFlight =  {
        id: oldFlight.id,
        from: oldFlight.from,
        to: oldFlight.to,
        date: newFlightDate.toISOString()
      };

      /*
      let newFlights = <any>
        Object.assign({}, oldFlight, {date: newFlightDate.toISOString() });
      */
      // TS 2.1
      /*
      let newFlight1 =  {
        ...oldFlight,
        date: newFlightDate.toISOString()
      };
      */


      let newFlights = [
        newFlight,
        ...oldFlights.slice(1, this.flights.length)
      ];

      this.flights = newFlights;

      this.flights$.next(this.flights);

    }

    findById(id: string): Observable<Flight> {

        // let url = this.baseUrl + '/api/secureflight';
        // let url = '/data/flight.json';
        let url = this.baseUrl + '/api/flight';

        let headers = new Headers();
        headers.set('Accept', 'text/json');
        headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());

        let search = new URLSearchParams();
        search.set('id', id);

        return this
            .http
            .get(url, {headers, search})
            .map(resp => resp.json());

    }

    find(from: string, to: string): void {

        //let url = this.baseUrl + '/api/flight';
        let url = this.baseUrl + '/api/secureflight';
        // let url = '/data/flights.json';

        let headers = new Headers();
        headers.set('Accept', 'text/json');
        //headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());

        let search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);

        this
            .http
            .get(url, {headers, search})
            .map(resp => resp.json())
            .subscribe(
                (flights) => {
                    this.flights = flights;
                    this.flights$.next(this.flights);
                },
                (err) => {
                    console.warn(err);
                }
            );
    }
}
