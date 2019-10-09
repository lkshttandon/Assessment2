import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../data.modal';
import { element } from 'protractor';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  name: string;
  dob: string;
  addr: string;
  phone: string;
  emp: User;
  empId: number;
  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.empId =parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.user.forEach(element => {
      if(element.id==this.empId){
        this.emp=element;
      }
    });
    this.name=this.emp.name;
    this.dob=this.emp.dob;
    this.addr=this.emp.addr;
    this.phone = this.emp.phone;
  }

  editInfo() {
    this.emp.name=this.name;
    this.emp.dob=this.dob;
    this.emp.addr=this.addr;
    this.emp.phone = this.phone;
    this.svc.user[this.svc.user.indexOf(this.emp)] = this.emp
    console.log(this.route.snapshot.firstChild);
    console.log(this.route.snapshot.data);
    console.log(this.route.snapshot.paramMap.keys);
    this.reset();
  }
  reset(){
    this.name="";
    this.dob="";
    this.addr="";
    this.phone="";
  }
}