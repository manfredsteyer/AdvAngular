"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CityValidatorDirective = CityValidatorDirective_1 = (function () {
    function CityValidatorDirective() {
    }
    CityValidatorDirective.prototype.validate = function (c) {
        var formGroup = c.root;
        var otherValueCtrl = formGroup.controls['to'];
        if (!otherValueCtrl) {
            return {};
        }
        var otherValue = otherValueCtrl.value;
        if (otherValue === c.value) {
            return {
                city: 'rundflug'
            };
        }
        if (!this.city) {
            return {};
        }
        var allowed = this.city.split(','); // ['Graz', 'Hamburg', 'Wien', 'Frankfurt'];
        if (allowed.indexOf(c.value) === -1) {
            return {
                city: true
            };
        }
        return {};
    };
    return CityValidatorDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CityValidatorDirective.prototype, "city", void 0);
CityValidatorDirective = CityValidatorDirective_1 = __decorate([
    core_1.Directive({
        selector: '[flightCity]',
        providers: [
            {
                provide: forms_1.NG_VALIDATORS,
                useExisting: CityValidatorDirective_1,
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [])
], CityValidatorDirective);
exports.CityValidatorDirective = CityValidatorDirective;
var CityValidatorDirective_1;
//# sourceMappingURL=city.validator.js.map