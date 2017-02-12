"use strict";
var core_1 = require("@angular/core");
var ValidationErrorsComponent = (function () {
    function ValidationErrorsComponent() {
    }
    return ValidationErrorsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ValidationErrorsComponent.prototype, "errors", void 0);
ValidationErrorsComponent = __decorate([
    core_1.Component({
        selector: 'flight-validation-errors',
        template: "\n        <div *ngIf=\"errors && errors.required\">\n            This field is required\n        </div>\n        <div *ngIf=\"errors && errors.minlength\">\n            Please enter at least {{ errors.minlength.expected }} characters\n        </div>\n        <div *ngIf=\"errors && errors.city\">\n            This city is now allowed\n        </div>\n    "
    })
], ValidationErrorsComponent);
exports.ValidationErrorsComponent = ValidationErrorsComponent;
//# sourceMappingURL=validation-errors.component.js.map