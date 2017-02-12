"use strict";
var core_1 = require("@angular/core");
var E2eLocatorDirective = (function () {
    function E2eLocatorDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    Object.defineProperty(E2eLocatorDirective.prototype, "flightE2eLocator", {
        set: function (flightE2eLocator) {
            this.renderer.setElementAttribute(this.el.nativeElement, 'flightE2eLocator', flightE2eLocator);
        },
        enumerable: true,
        configurable: true
    });
    return E2eLocatorDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], E2eLocatorDirective.prototype, "flightE2eLocator", null);
E2eLocatorDirective = __decorate([
    core_1.Directive({ selector: '[flightE2eLocator]' }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], E2eLocatorDirective);
exports.E2eLocatorDirective = E2eLocatorDirective;
//# sourceMappingURL=e2e-locator.directive.js.map