"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RoundTripDirective = RoundTripDirective_1 = (function () {
    function RoundTripDirective() {
    }
    RoundTripDirective.prototype.validate = function (control) {
        var formGroup = control;
        var fromCtrl = formGroup.controls['from'];
        var toCtrl = formGroup.controls['to'];
        if (!fromCtrl || !toCtrl) {
            return {};
        }
        var from = fromCtrl.value;
        var to = toCtrl.value;
        if (from === to) {
            return {
                'round-trip': {
                    city: from
                }
            };
        }
        return {};
    };
    return RoundTripDirective;
}());
RoundTripDirective = RoundTripDirective_1 = __decorate([
    core_1.Directive({
        selector: '[flightRoundTrip]',
        providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: RoundTripDirective_1, multi: true }]
    })
], RoundTripDirective);
exports.RoundTripDirective = RoundTripDirective;
var RoundTripDirective_1;
//# sourceMappingURL=roundtrip.validator.js.map