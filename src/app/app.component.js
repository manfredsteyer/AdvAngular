"use strict";
var core_1 = require("@angular/core");
var angular_oauth2_oidc_1 = require("angular-oauth2-oidc");
var router_1 = require("@angular/router");
var ng2_translate_1 = require("ng2-translate");
var AppComponent = (function () {
    function AppComponent(router, oauthService, translate) {
        this.router = router;
        this.oauthService = oauthService;
        this.translate = translate;
        this.info = 'Welt';
        this.showWaitInfo = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.initNgTranslate();
        this.initRouterEvents();
        this.initAuth();
    };
    AppComponent.prototype.initNgTranslate = function () {
        /*
        this.translate.addLangs(['en', 'de']);
        this.translate.setDefaultLang('de');
        this.translate.use('de');
        */
    };
    AppComponent.prototype.initRouterEvents = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                _this.showWaitInfo = true;
            }
            if (event instanceof router_1.NavigationEnd
                || event instanceof router_1.NavigationCancel
                || event instanceof router_1.NavigationError) {
                _this.showWaitInfo = false;
            }
        });
    };
    AppComponent.prototype.initAuth = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'flight-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        angular_oauth2_oidc_1.OAuthService,
        ng2_translate_1.TranslateService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map