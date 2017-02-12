"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_tokens_1 = require("../../app.tokens");
var angular_oauth2_oidc_1 = require("angular-oauth2-oidc");
var rxjs_1 = require("rxjs");
var FlightService = (function () {
    function FlightService(oauthService, http, baseUrl) {
        this.oauthService = oauthService;
        this.http = http;
        this.baseUrl = baseUrl;
        this.flights = [];
        this.flights$ = new rxjs_1.Subject();
    }
    FlightService.prototype.delay = function () {
        var ONE_MINUTE = 1000 * 60;
        var oldFlights = this.flights;
        var oldFlight = this.flights[0];
        var oldFlightDate = new Date(oldFlight.date);
        var newFlightDate = new Date(oldFlightDate.getTime() + ONE_MINUTE * 15);
        var newFlight = {
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
        var newFlights = [
            newFlight
        ].concat(oldFlights.slice(1, this.flights.length));
        this.flights = newFlights;
        this.flights$.next(this.flights);
    };
    FlightService.prototype.findById = function (id) {
        // let url = this.baseUrl + '/api/secureflight';
        // let url = '/data/flight.json';
        var url = this.baseUrl + '/api/flight';
        var headers = new http_1.Headers();
        headers.set('Accept', 'text/json');
        headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());
        var search = new http_1.URLSearchParams();
        search.set('id', id);
        return this
            .http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json(); });
    };
    FlightService.prototype.find = function (from, to) {
        var _this = this;
        var url = this.baseUrl + '/api/flight';
        // let url = this.baseUrl + '/api/secureflight';
        // let url = '/data/flights.json';
        var headers = new http_1.Headers();
        headers.set('Accept', 'text/json');
        headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());
        var search = new http_1.URLSearchParams();
        search.set('from', from);
        search.set('to', to);
        this
            .http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json(); })
            .subscribe(function (flights) {
            _this.flights = flights;
            _this.flights$.next(_this.flights);
        }, function (err) {
            console.warn(err);
        });
    };
    return FlightService;
}());
FlightService = __decorate([
    core_1.Injectable(),
    __param(2, core_1.Inject(app_tokens_1.BASE_URL)),
    __metadata("design:paramtypes", [angular_oauth2_oidc_1.OAuthService,
        http_1.Http, String])
], FlightService);
exports.FlightService = FlightService;
//# sourceMappingURL=flight.service.js.map