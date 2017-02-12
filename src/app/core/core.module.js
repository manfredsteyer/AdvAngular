"use strict";
var core_1 = require("@angular/core");
var leave_component_guard_1 = require("../shared/deactivation/leave-component-guard");
var custom_preloading_strategy_1 = require("../shared/preload/custom-preloading.strategy");
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [],
        providers: [
            leave_component_guard_1.LeaveComponentGuard,
            custom_preloading_strategy_1.CustomPreloadingStrategy,
        ],
        exports: []
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map