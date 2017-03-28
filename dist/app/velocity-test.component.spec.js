"use strict";
var testing_1 = require('@angular/core/testing');
var velocity_test_component_1 = require('../app/velocity-test.component');
testing_1.beforeEachProviders(function () { return [velocity_test_component_1.VelocityTestAppComponent]; });
testing_1.describe('App: VelocityTest', function () {
    testing_1.it('should create the app', testing_1.inject([velocity_test_component_1.VelocityTestAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'velocity-test works!\'', testing_1.inject([velocity_test_component_1.VelocityTestAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('velocity-test works!');
    }));
});
//# sourceMappingURL=velocity-test.component.spec.js.map