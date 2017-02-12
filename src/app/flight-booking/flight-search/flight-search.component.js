"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var flight_service_1 = require("./flight.service");
var FlightSearchComponent = (function () {
    function FlightSearchComponent(flightService, route) {
        this.flightService = flightService;
        this.from = 'Hamburg';
        this.to = 'Graz';
        this.date = (new Date()).toISOString();
        route.queryParams.subscribe(function (p) {
            // console.debug('queryParams', p);
        });
    }
    Object.defineProperty(FlightSearchComponent.prototype, "flights$", {
        get: function () {
            return this.flightService.flights$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlightSearchComponent.prototype, "flights", {
        // cmp.flights
        get: function () {
            return this.flightService.flights;
        },
        enumerable: true,
        configurable: true
    });
    FlightSearchComponent.prototype.select = function (f) {
        this.selectedFlight = f;
    };
    FlightSearchComponent.prototype.search = function () {
        this.flightService
            .find(this.from, this.to);
        // .map(function(resp) { return resp.json() })
    };
    FlightSearchComponent.prototype.delay = function () {
        this.flightService.delay();
    };
    FlightSearchComponent.prototype.disableButton = function (event) {
        console.log(event);
    };
    return FlightSearchComponent;
}());
FlightSearchComponent = __decorate([
    core_1.Component({
        selector: 'flight-search',
        templateUrl: './flight-search.component.html',
        styleUrls: ['./flight-search.component.css']
    }),
    __metadata("design:paramtypes", [flight_service_1.FlightService, router_1.ActivatedRoute])
], FlightSearchComponent);
exports.FlightSearchComponent = FlightSearchComponent;
//# sourceMappingURL=flight-search.component.js.map