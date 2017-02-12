"use strict";
var core_1 = require("@angular/core");
var FlightCardComponent = (function () {
    function FlightCardComponent() {
        this.selectedItemChange = new core_1.EventEmitter();
        this.specialAnimationStatus = new core_1.EventEmitter();
        this.hoverState = false;
    }
    FlightCardComponent.prototype.isSelected = function () {
        if (this.selectedItem) {
            return this.selectedItem === this.item ? 'yes' : 'no';
        }
    };
    FlightCardComponent.prototype.toggleHover = function () {
        this.hoverState = !this.hoverState;
    };
    FlightCardComponent.prototype.setStatus = function (event) {
        this.specialAnimationStatus.emit(event);
    };
    FlightCardComponent.prototype.select = function () {
        this.selectedItemChange.emit(this.item);
    };
    return FlightCardComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FlightCardComponent.prototype, "item", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FlightCardComponent.prototype, "selectedItem", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FlightCardComponent.prototype, "selectedItemChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FlightCardComponent.prototype, "specialAnimationStatus", void 0);
FlightCardComponent = __decorate([
    core_1.Component({
        selector: 'flight-card',
        templateUrl: './flight-card.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    })
], FlightCardComponent);
exports.FlightCardComponent = FlightCardComponent;
//# sourceMappingURL=flight.card.component.js.map