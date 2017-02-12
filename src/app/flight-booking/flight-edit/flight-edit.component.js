"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var flight_service_1 = require("../flight-search/flight.service");
var FlightEditComponent = (function () {
    function FlightEditComponent(flightService, route) {
        this.flightService = flightService;
        this.route = route;
        this.exitWarning = {
            show: false,
            resolve: null
        };
    }
    FlightEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.id = p['id'];
        });
        this.route.data.subscribe(function (data) {
            var flight = data['flight'];
            if (flight) {
                _this.flight = flight;
            }
            else {
                _this.flight = {};
            }
        });
    };
    FlightEditComponent.prototype.save = function () {
        console.warn('save is not implemented');
    };
    FlightEditComponent.prototype.decide = function (decision) {
        this.exitWarning.show = false;
        this.exitWarning.resolve(decision);
    };
    FlightEditComponent.prototype.canDeactivate = function () {
        var _this = this;
        this.exitWarning.show = true;
        return new Promise(function (resolve) {
            _this.exitWarning.resolve = resolve;
        });
    };
    FlightEditComponent.prototype.remove = function () {
        console.log('remove is not implemented');
    };
    return FlightEditComponent;
}());
FlightEditComponent = __decorate([
    core_1.Component({
        templateUrl: './flight-edit.component.html'
    }),
    __metadata("design:paramtypes", [flight_service_1.FlightService, router_1.ActivatedRoute])
], FlightEditComponent);
exports.FlightEditComponent = FlightEditComponent;
//# sourceMappingURL=flight-edit.component.js.map