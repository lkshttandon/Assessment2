import { Component, OnInit } from '@angular/core';
import { User } from '../data.modal';
import { DataService } from '../data.service';
import { Edu } from '../data.edu';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  array: User[]=[];
  array1:Edu[] = [];
  token: User;
  filter: string;
  txt:string;
  constructor(public dataservice: DataService) { }

  ngOnInit() {
    this.array = this.dataservice.disp();
    this.array1 = this.dataservice.disp1();
  }
 filter1(){
   if(this.filter == this.token.name){
     this.dataservice.filt(this.filter);
   }
 }
  remv(i){
    this.array.splice(i,1);
  }

}
