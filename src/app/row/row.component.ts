import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-row',
  templateUrl: 'row.component.html',
  styleUrls: ['row.component.css']
})
export class RowComponent implements OnInit {

  @Input() outlet: any;

  constructor() {


  }

  ngOnInit() {
  }

}
