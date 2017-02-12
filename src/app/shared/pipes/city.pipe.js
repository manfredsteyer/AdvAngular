"use strict";
var core_1 = require("@angular/core");
var CityPipe = (function () {
    function CityPipe() {
    }
    CityPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fmt = args[0]; // short, long
        var short, long;
        switch (value) {
            case 'Graz':
                long = 'Flughafen Graz Thalerhof';
                short = 'GRZ';
                break;
            case 'Hamburg':
                long = 'Airport Hamburg Fuhlsbüttl Helmut Schmidt';
                short = 'HAM';
                break;
            default:
                long = short = 'ROM';
        }
        if (fmt === 'short') {
            return short;
        }
        return long;
    };
    return CityPipe;
}());
CityPipe = __decorate([
    core_1.Pipe({
        name: 'flightCity',
        pure: true
    })
], CityPipe);
exports.CityPipe = CityPipe;
//# sourceMappingURL=city.pipe.js.map