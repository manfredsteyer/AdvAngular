"use strict";
var Observable_1 = require("rxjs/Observable");
var passenger_service_1 = require("./passenger.service");
var core_1 = require("@angular/core");
var PassengerResolver = (function () {
    function PassengerResolver(passengerService) {
        this.passengerService = passengerService;
    }
    PassengerResolver.prototype.resolve = function (route, state) {
        var id = route.params['id'];
        if (id == '0') {
            return Observable_1.Observable.of(null);
        }
        return this.passengerService.findById(id);
    };
    return PassengerResolver;
}());
PassengerResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [passenger_service_1.PassengerService])
], PassengerResolver);
exports.PassengerResolver = PassengerResolver;
//# sourceMappingURL=passenger.resolver.js.map