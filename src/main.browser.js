"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
var core_1 = require("@angular/core");
if (ENV === 'prod') {
    core_1.enableProdMode();
}
/*
let options: any = {
    providers: [
        // {provide: TRANSLATIONS, useValue: require('./i18n/messages.de.xlf')},
        // {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'},
        {provide: LOCALE_ID, useValue: 'de'}
    ]
};
*/
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(app_module_1.AppModule /*, options*/)
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.browser.js.map