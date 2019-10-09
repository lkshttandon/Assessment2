import { Component, OnInit } from '@angular/core';
import { User } from '../data.modal';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Edu } from '../data.edu';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  emp: User;
  empId: number;
  edu : Edu;
  eduId : number;
  //text:string;
  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.empId =parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.user.forEach(element => {
      if(element.id==this.empId){
        this.emp=element;
      }
    });
    this.eduId =parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.edu.forEach(element => {
      if(element.id==this.eduId){
        this.edu=element;
      }
    });
  }

}
