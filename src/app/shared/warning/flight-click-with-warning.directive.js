"use strict";
var core_1 = require("@angular/core");
var FlightClickWithWarningDirective = (function () {
    function FlightClickWithWarningDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.warning = 'Are you sure?';
        this.flightClickWithWarning = new core_1.EventEmitter();
    }
    FlightClickWithWarningDirective.prototype.ngOnInit = function () {
        // Warnung: Direkter DOM-Zugriff!
        // this.elementRef.nativeElement.setAttribute('class', 'btn btn-danger');
        // Indirekter DOM-Zugriff über Renderer
        this.renderer.setElementAttribute(this.elementRef.nativeElement, 'class', 'btn btn-danger');
    };
    FlightClickWithWarningDirective.prototype.handleClick = function ($event) {
        console.log('handleClick', $event);
        if (confirm(this.warning)) {
            this.flightClickWithWarning.emit();
        }
    };
    return FlightClickWithWarningDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FlightClickWithWarningDirective.prototype, "warning", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FlightClickWithWarningDirective.prototype, "flightClickWithWarning", void 0);
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FlightClickWithWarningDirective.prototype, "handleClick", null);
FlightClickWithWarningDirective = __decorate([
    core_1.Directive({
        selector: '[flightClickWithWarning]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], FlightClickWithWarningDirective);
exports.FlightClickWithWarningDirective = FlightClickWithWarningDirective;
//# sourceMappingURL=flight-click-with-warning.directive.js.map