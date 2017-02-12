"use strict";
var Observable_1 = require("rxjs/Observable");
var flight_service_1 = require("./flight.service");
var core_1 = require("@angular/core");
var FlightResolver = (function () {
    function FlightResolver(flightService) {
        this.flightService = flightService;
    }
    FlightResolver.prototype.resolve = function (route, state) {
        var id = route.params['id'];
        if (id == '0') {
            return Observable_1.Observable.of(null);
        }
        return this.flightService.findById(id);
    };
    return FlightResolver;
}());
FlightResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [flight_service_1.FlightService])
], FlightResolver);
exports.FlightResolver = FlightResolver;
//# sourceMappingURL=flight.resolver.js.map