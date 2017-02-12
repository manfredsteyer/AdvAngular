"use strict";
var core_1 = require("@angular/core");
var passenger_1 = require("../../entities/passenger");
var PassengerCardComponent = (function () {
    function PassengerCardComponent() {
        this.selectedItemChange = new core_1.EventEmitter();
    }
    PassengerCardComponent.prototype.isSelected = function () {
        if (this.selectedItem) {
            return this.selectedItem === this.item ? 'yes' : 'no';
        }
    };
    PassengerCardComponent.prototype.select = function () {
        this.selectedItemChange.emit(this.item);
    };
    return PassengerCardComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", passenger_1.Passenger)
], PassengerCardComponent.prototype, "item", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", passenger_1.Passenger)
], PassengerCardComponent.prototype, "selectedItem", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PassengerCardComponent.prototype, "selectedItemChange", void 0);
PassengerCardComponent = __decorate([
    core_1.Component({
        selector: 'passenger-card',
        templateUrl: './passenger-card.component.html'
    })
], PassengerCardComponent);
exports.PassengerCardComponent = PassengerCardComponent;
//# sourceMappingURL=passenger.card.component.js.map