"use strict";
var core_1 = require("@angular/core");
var TooltipComponent = (function () {
    function TooltipComponent() {
    }
    return TooltipComponent;
}());
TooltipComponent = __decorate([
    core_1.Component({
        selector: 'flight-tooltip',
        template: "\n        <div class=\"tooltip-bg\">\n            <b>Tipp:</b>\n            <ng-content></ng-content>\n        </div>\n    ",
        styles: ["\n        .tooltip-bg {\n            background-color: yellow; \n            border: solid 2px darkkhaki\n        }\n    "]
    })
], TooltipComponent);
exports.TooltipComponent = TooltipComponent;
//# sourceMappingURL=tooltip.component.js.map