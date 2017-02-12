"use strict";
var core_1 = require("@angular/core");
var UnlessDirective = (function () {
    function UnlessDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(UnlessDirective.prototype, "flightUnless", {
        set: function (condition) {
            if (!condition) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    return UnlessDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], UnlessDirective.prototype, "flightUnless", null);
UnlessDirective = __decorate([
    core_1.Directive({
        selector: '[flightUnless]'
    }),
    __metadata("design:paramtypes", [core_1.TemplateRef,
        core_1.ViewContainerRef])
], UnlessDirective);
exports.UnlessDirective = UnlessDirective;
//# sourceMappingURL=unless.directive.js.map