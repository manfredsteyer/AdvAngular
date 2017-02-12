"use strict";
var core_1 = require("@angular/core");
var LeaveComponentGuard = (function () {
    function LeaveComponentGuard() {
    }
    LeaveComponentGuard.prototype.canDeactivate = function (component, route, state) {
        return component.canDeactivate();
    };
    return LeaveComponentGuard;
}());
LeaveComponentGuard = __decorate([
    core_1.Injectable()
], LeaveComponentGuard);
exports.LeaveComponentGuard = LeaveComponentGuard;
//# sourceMappingURL=leave-component-guard.js.map