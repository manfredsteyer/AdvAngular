"use strict";
var browser_1 = require("@angular/platform-browser/src/browser");
var platform_browser_1 = require("@angular/platform-browser");
function CustomAnimationDriverFactory() {
    if (ENV === 'no-animation') {
        return platform_browser_1.AnimationDriver.NOOP;
    }
    return browser_1._resolveDefaultAnimationDriver();
}
exports.CustomAnimationDriverFactory = CustomAnimationDriverFactory;
//# sourceMappingURL=custom-animation-driver.js.map