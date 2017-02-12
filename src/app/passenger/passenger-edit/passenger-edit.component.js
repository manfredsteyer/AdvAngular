"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var passenger_service_1 = require("../passenger-search/passenger.service");
var PassengerEditComponent = (function () {
    function PassengerEditComponent(passengerService, route) {
        this.passengerService = passengerService;
        this.route = route;
        this.exitWarning = {
            show: false,
            resolve: null
        };
    }
    PassengerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.id = p['id'];
        });
        this.route.data.subscribe(function (data) {
            var passenger = data['passenger'];
            if (passenger) {
                _this.passenger = passenger;
            }
            else {
                _this.passenger = {};
            }
        });
    };
    PassengerEditComponent.prototype.save = function () {
        console.warn('save is not implemented');
    };
    PassengerEditComponent.prototype.decide = function (decision) {
        this.exitWarning.show = false;
        this.exitWarning.resolve(decision);
    };
    PassengerEditComponent.prototype.canDeactivate = function () {
        var _this = this;
        this.exitWarning.show = true;
        return new Promise(function (resolve) {
            _this.exitWarning.resolve = resolve;
        });
    };
    PassengerEditComponent.prototype.remove = function () {
        console.log('remove is not implemented');
    };
    return PassengerEditComponent;
}());
PassengerEditComponent = __decorate([
    core_1.Component({
        templateUrl: './passenger-edit.component.html'
    }),
    __metadata("design:paramtypes", [passenger_service_1.PassengerService, router_1.ActivatedRoute])
], PassengerEditComponent);
exports.PassengerEditComponent = PassengerEditComponent;
//# sourceMappingURL=passenger-edit.component.js.map