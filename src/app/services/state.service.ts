import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StateService {

  // status variables
  currentPage: number = 0; 

  // observable
  private paginationSubject = new Subject<string>();
  paginationSubject$ = this.paginationSubject.asObservable();

  // This method triggers the observable event in order to tell
  // all the subscriptors a new page should be loaded
  changePage(index) {
    this.currentPage = index;
    this.paginationSubject.next(index);
  }

}
