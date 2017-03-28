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
var data_service_1 = require('./services/data.service');
require('rxjs/Rx');
var Observable_1 = require('rxjs/Observable');
var row_component_1 = require('./row/row.component');
var pager_component_1 = require('./pager/pager.component');
var state_service_1 = require('./services/state.service');
var VelocityTestAppComponent = (function () {
    function VelocityTestAppComponent(dataService, state) {
        var _this = this;
        this.state = state;
        this.title = 'Outlet Table Velocity Test';
        // getting data
        this.dataService = dataService;
        // loading first pager
        this.loadNewPage(1);
        // pagination subject subscription (listen for a new page request event from pager control)
        state.paginationSubject$.subscribe(function (nextPage) {
            _this.loadNewPage(parseInt(nextPage));
        });
    }
    // each time we need to load a page this method should be called
    VelocityTestAppComponent.prototype.loadNewPage = function (index) {
        var _this = this;
        var dataObservable = Observable_1.Observable.fromPromise(this.dataService.getPagingOutletsData(index));
        // listen for the first dataService execution
        dataObservable.subscribe(function (response) {
            _this.outletsData = response.itemsInPage;
            _this.pagesQty = response.totalItemsQty / _this.dataService.getAmountItemsPerPage();
        });
    };
    VelocityTestAppComponent.prototype.headerItemClick = function (evt, sortBy) {
        // sorting and reloading clicked column
        this.dataService.sortItemsByProp(sortBy);
        this.loadNewPage(1);
    };
    VelocityTestAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'velocity-test-app',
            templateUrl: 'velocity-test.component.html',
            styleUrls: ['velocity-test.component.css'],
            providers: [data_service_1.OutletService, state_service_1.StateService],
            directives: [row_component_1.RowComponent, pager_component_1.PagerComponent]
        }), 
        __metadata('design:paramtypes', [data_service_1.OutletService, state_service_1.StateService])
    ], VelocityTestAppComponent);
    return VelocityTestAppComponent;
}());
exports.VelocityTestAppComponent = VelocityTestAppComponent;
//# sourceMappingURL=velocity-test.component.js.map