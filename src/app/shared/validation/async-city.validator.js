"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AsyncCityValidatorDirective = AsyncCityValidatorDirective_1 = (function () {
    function AsyncCityValidatorDirective() {
    }
    AsyncCityValidatorDirective.prototype.validate = function (ctrl) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                if (ctrl.value === 'Graz' || ctrl.value === 'Hamburg') {
                    resolve({});
                    return;
                }
                resolve({ 'async-city': false });
            }, 100);
        });
    };
    return AsyncCityValidatorDirective;
}());
AsyncCityValidatorDirective = AsyncCityValidatorDirective_1 = __decorate([
    core_1.Directive({
        selector: '[flightAsyncCity]',
        providers: [
            {
                provide: forms_1.NG_ASYNC_VALIDATORS,
                useExisting: AsyncCityValidatorDirective_1,
                multi: true
            }
        ]
    })
], AsyncCityValidatorDirective);
exports.AsyncCityValidatorDirective = AsyncCityValidatorDirective;
var AsyncCityValidatorDirective_1;
//# sourceMappingURL=async-city.validator.js.map