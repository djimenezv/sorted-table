import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { VelocityTestAppComponent } from '../app/velocity-test.component';

beforeEachProviders(() => [VelocityTestAppComponent]);

describe('App: VelocityTest', () => {
  it('should create the app',
      inject([VelocityTestAppComponent], (app: VelocityTestAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'velocity-test works!\'',
      inject([VelocityTestAppComponent], (app: VelocityTestAppComponent) => {
    expect(app.title).toEqual('velocity-test works!');
  }));
});
