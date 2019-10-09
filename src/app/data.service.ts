import { Injectable } from '@angular/core';
import { User } from './data.modal';
import { Edu } from './data.edu';
@Injectable({
  providedIn: 'root'
})
export class DataService {
edu: Edu[] = []
user: User[]=[];
u: User;
e:Edu;

  constructor() { }
  add(name: string,dob: string,addr: string,phone: string,degree,marks,stream,college){
    this.u = new User(name,dob,addr,phone);
    this.e = new Edu(degree,marks,stream,college);
    this.edu.push(this.e);
    this.user.push(this.u);
    this.e.id = this.edu.length -1;
    this.u.id = this.user.length -1;

    console.log(this.u.id);
  }
  disp(){
    return this.user;}

  filt(a){
    if(this.u.name = a){
      return this.user;
    }
    
  }
    

  disp1(){
    return this.edu;
  }
}
