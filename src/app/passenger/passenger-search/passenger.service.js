"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_tokens_1 = require("../../app.tokens");
var angular_oauth2_oidc_1 = require("angular-oauth2-oidc");
var PassengerService = (function () {
    function PassengerService(oauthService, http, baseUrl) {
        this.oauthService = oauthService;
        this.http = http;
        this.baseUrl = baseUrl;
        this.passengers = [];
    }
    PassengerService.prototype.findById = function (id) {
        // let url = this.baseUrl + '/api/securepassenger';
        // let url = '/data/passenger.json';
        var url = this.baseUrl + '/api/passenger';
        var headers = new http_1.Headers();
        headers.set('Accept', 'text/json');
        headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());
        var search = new http_1.URLSearchParams();
        search.set('id', id);
        return this
            .http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json(); });
    };
    PassengerService.prototype.find = function (name) {
        var _this = this;
        var url = this.baseUrl + '/api/passenger';
        // let url = this.baseUrl + '/api/securepassenger';
        // let url = '/data/passengers.json';
        var headers = new http_1.Headers();
        headers.set('Accept', 'text/json');
        headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());
        var search = new http_1.URLSearchParams();
        search.set('name', name);
        this
            .http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json(); })
            .subscribe(function (passengers) {
            _this.passengers = passengers;
        }, function (err) {
            console.warn(err);
        });
    };
    return PassengerService;
}());
PassengerService = __decorate([
    core_1.Injectable(),
    __param(2, core_1.Inject(app_tokens_1.BASE_URL)),
    __metadata("design:paramtypes", [angular_oauth2_oidc_1.OAuthService,
        http_1.Http, String])
], PassengerService);
exports.PassengerService = PassengerService;
//# sourceMappingURL=passenger.service.js.map