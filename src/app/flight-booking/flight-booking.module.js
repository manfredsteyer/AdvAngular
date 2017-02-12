"use strict";
var core_1 = require("@angular/core");
var flight_search_component_1 = require("./flight-search/flight-search.component");
var flight_card_component_1 = require("./flight-card/flight.card.component");
var flight_edit_component_1 = require("./flight-edit/flight-edit.component");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var shared_module_1 = require("../shared/shared.module");
var flight_booking_routes_1 = require("./flight-booking.routes");
var flight_booking_component_1 = require("./flight-booking.component");
var flight_service_1 = require("./flight-search/flight.service");
var flight_resolver_1 = require("./flight-search/flight.resolver");
var FlightBookingModule = (function () {
    function FlightBookingModule() {
    }
    return FlightBookingModule;
}());
FlightBookingModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            shared_module_1.SharedModule,
            flight_booking_routes_1.FlightBookingRouterModule
        ],
        declarations: [
            flight_search_component_1.FlightSearchComponent,
            flight_card_component_1.FlightCardComponent,
            flight_edit_component_1.FlightEditComponent,
            flight_booking_component_1.FlightBookingComponent,
        ],
        providers: [
            flight_service_1.FlightService,
            flight_resolver_1.FlightResolver
        ],
        exports: []
    })
], FlightBookingModule);
exports.FlightBookingModule = FlightBookingModule;
//# sourceMappingURL=flight-booking.module.js.map