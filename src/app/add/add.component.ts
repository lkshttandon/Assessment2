import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../data.modal';
  import { from } from 'rxjs';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  name: string;
  dob: string;
  addr: string;
  phone: string;
  degree: string;
  marks: string;
  stream: string;
  college: string;
  constructor(private dataservice : DataService) { }

  ngOnInit() {
  }
  
  add(){
    this.dataservice.add(this.name,this.dob,this.addr,this.phone,this.degree,this.marks,this.stream,this.college);
    this.reset();
  }
  reset(){
    this.name="";
    this.dob="";
    this.addr="";
    this.phone = "";
    this.degree = "";
    this.marks = "";
    this.stream = "";
    this.college = "";
  }
}
