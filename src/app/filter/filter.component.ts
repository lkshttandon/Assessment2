import { Component, OnInit } from '@angular/core';
import { User } from '../data.modal';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  array: User[]=[];
  
  constructor() { }

  ngOnInit() {
  }

}
