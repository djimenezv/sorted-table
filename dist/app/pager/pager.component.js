"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var state_service_1 = require('../services/state.service');
var PagerComponent = (function () {
    function PagerComponent(state) {
        this.state = state;
        this.pages = [];
        this.pagerState = state;
    }
    Object.defineProperty(PagerComponent.prototype, "pagesAmount", {
        set: function (pages) {
            for (var i = 1; i <= pages; i++) {
                this.pages.push({ index: i });
            }
        },
        enumerable: true,
        configurable: true
    });
    PagerComponent.prototype.ngOnInit = function () {
    };
    PagerComponent.prototype.pagerClick = function (ev) {
        // this changepage method trigger next page method
        // in order to tell who needed that a new page needs
        // to be loaded.
        this.pagerState.changePage(parseInt(ev.target.text));
        return false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], PagerComponent.prototype, "pagesAmount", null);
    PagerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-pager',
            templateUrl: 'pager.component.html',
            styleUrls: ['pager.component.css']
        }), 
        __metadata('design:paramtypes', [state_service_1.StateService])
    ], PagerComponent);
    return PagerComponent;
}());
exports.PagerComponent = PagerComponent;
//# sourceMappingURL=pager.component.js.map