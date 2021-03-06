"use strict";
var core_1 = require("@angular/core");
var passenger_search_component_1 = require("./passenger-search/passenger-search.component");
var passenger_card_component_1 = require("./passenger-card/passenger.card.component");
var passenger_edit_component_1 = require("./passenger-edit/passenger-edit.component");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var shared_module_1 = require("../shared/shared.module");
var passenger_routes_1 = require("./passenger.routes");
var passenger_component_1 = require("./passenger.component");
var passenger_service_1 = require("./passenger-search/passenger.service");
var passenger_resolver_1 = require("./passenger-search/passenger.resolver");
var PassengerModule = (function () {
    function PassengerModule() {
    }
    return PassengerModule;
}());
PassengerModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            shared_module_1.SharedModule,
            passenger_routes_1.PassengerBookingRouterModule
        ],
        declarations: [
            passenger_search_component_1.PassengerSearchComponent,
            passenger_card_component_1.PassengerCardComponent,
            passenger_edit_component_1.PassengerEditComponent,
            passenger_component_1.PassengerComponent,
        ],
        providers: [
            passenger_service_1.PassengerService,
            passenger_resolver_1.PassengerResolver
        ],
        exports: []
    })
], PassengerModule);
exports.PassengerModule = PassengerModule;
//# sourceMappingURL=passenger.module.js.map