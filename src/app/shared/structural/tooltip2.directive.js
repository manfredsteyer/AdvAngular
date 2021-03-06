"use strict";
var core_1 = require("@angular/core");
var tooltip_component_1 = require("./tooltip.component");
var Tooltip2Directive = (function () {
    function Tooltip2Directive(viewContainer, renderer, injector, componentFactoryResolver) {
        this.viewContainer = viewContainer;
        this.renderer = renderer;
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    Tooltip2Directive.prototype.handleMouseover = function ($event) {
        var compFactory = this.componentFactoryResolver.resolveComponentFactory(tooltip_component_1.TooltipComponent);
        var textNode = document.createTextNode(this.message);
        this.componentRef = this.viewContainer.createComponent(compFactory, null, this.injector, [[textNode]]);
        var nativeElement = this.componentRef.location.nativeElement;
        var left = $event.target.offsetLeft + 'px';
        var top = ($event.target.offsetTop + $event.target.offsetHeight + 5) + 'px';
        this.renderer.setElementStyle(nativeElement, 'position', 'absolute');
        this.renderer.setElementStyle(nativeElement, 'left', left);
        this.renderer.setElementStyle(nativeElement, 'top', top);
        this.renderer.setElementStyle(nativeElement, 'width', '200px');
    };
    Tooltip2Directive.prototype.handleMouseout = function () {
        this.componentRef.destroy();
    };
    return Tooltip2Directive;
}());
__decorate([
    core_1.Input('flightTooltip2'),
    __metadata("design:type", String)
], Tooltip2Directive.prototype, "message", void 0);
__decorate([
    core_1.HostListener('mouseover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Tooltip2Directive.prototype, "handleMouseover", null);
__decorate([
    core_1.HostListener('mouseout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Tooltip2Directive.prototype, "handleMouseout", null);
Tooltip2Directive = __decorate([
    core_1.Directive({
        selector: '[flightTooltip2]'
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef,
        core_1.Renderer,
        core_1.Injector,
        core_1.ComponentFactoryResolver])
], Tooltip2Directive);
exports.Tooltip2Directive = Tooltip2Directive;
//# sourceMappingURL=tooltip2.directive.js.map