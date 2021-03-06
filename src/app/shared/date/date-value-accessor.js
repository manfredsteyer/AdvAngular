"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var DateValueAccessorDirective = DateValueAccessorDirective_1 = (function () {
    function DateValueAccessorDirective(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    DateValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DateValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    DateValueAccessorDirective.prototype.blur = function () {
        this.onTouched();
    };
    // Parser: View --> Ctrl
    DateValueAccessorDirective.prototype.input = function (value) {
        // Write back to model
        if (value) {
            value = value.split(/\./);
            value = value[2] + '-' + value[1] + '-' + value[0];
        }
        this.onChange(value);
    };
    // Formatter: Ctrl --> View
    DateValueAccessorDirective.prototype.writeValue = function (value) {
        // Write to view
        if (value) {
            var date = new Date(value);
            value =
                date.getDate() + '.'
                    + (date.getMonth() + 1) + '.'
                    + date.getFullYear();
        }
        var normalizedValue = (value) ? value : '';
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    return DateValueAccessorDirective;
}());
DateValueAccessorDirective = DateValueAccessorDirective_1 = __decorate([
    core_1.Directive({
        selector: '[flightDate]',
        providers: [{
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return DateValueAccessorDirective_1; }),
                multi: true
            }]
    }),
    __metadata("design:paramtypes", [core_1.Renderer, core_1.ElementRef])
], DateValueAccessorDirective);
exports.DateValueAccessorDirective = DateValueAccessorDirective;
var DateValueAccessorDirective_1;
//# sourceMappingURL=date-value-accessor.js.map