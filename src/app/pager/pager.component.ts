import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  moduleId: module.id,
  selector: 'app-pager',
  templateUrl: 'pager.component.html',
  styleUrls: ['pager.component.css']
})
export class PagerComponent implements OnInit {

  pages: any = [];
  pagesQty: number;
  pagerState: StateService;

  @Input()
  set pagesAmount(pages: number) {

    for (let i = 1; i <= pages; i++) {
      this.pages.push({ index: i });
    }

  }

  constructor(private state: StateService) {
    this.pagerState = state;
  }

  ngOnInit() {
  }

  pagerClick (ev) {
    // this changepage method trigger next page method
    // in order to tell who needed that a new page needs
    // to be loaded.
    this.pagerState.changePage(parseInt(ev.target.text));
    return false;
  }

}
