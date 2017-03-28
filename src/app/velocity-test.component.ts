import { Component } from '@angular/core';
import { OutletService } from './services/data.service';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import { RowComponent } from './row/row.component';
import { PagerComponent } from './pager/pager.component';
import { StateService } from './services/state.service';


@Component({
  moduleId: module.id,
  selector: 'velocity-test-app',
  templateUrl: 'velocity-test.component.html',
  styleUrls: ['velocity-test.component.css'],
  providers: [OutletService, StateService],
  directives: [RowComponent, PagerComponent]
})
export class VelocityTestAppComponent {

  title: string = 'Outlet Table Velocity Test';
  dataService: OutletService;
  outletsData: JSON;
  pagesQty: number;

  constructor(dataService: OutletService, private state: StateService) {

    // getting data
    this.dataService = dataService;

    // loading first pager
    this.loadNewPage(1);

    // pagination subject subscription (listen for a new page request event from pager control)
    state.paginationSubject$.subscribe(nextPage => {
      this.loadNewPage(parseInt(nextPage));
    });

  }

  // each time we need to load a page this method should be called
  loadNewPage(index: number) {

    let dataObservable = Observable.fromPromise(this.dataService.getPagingOutletsData(index));

    // listen for the first dataService execution
    dataObservable.subscribe(response => {
      this.outletsData = response.itemsInPage;
      this.pagesQty = response.totalItemsQty / this.dataService.getAmountItemsPerPage();
    });
  }

  headerItemClick(evt, sortBy) {

    // sorting and reloading clicked column
    this.dataService.sortItemsByProp(sortBy);
    this.loadNewPage(1);

  }
}
