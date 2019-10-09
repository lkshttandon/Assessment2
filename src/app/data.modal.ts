export class User{
    id:number;
    name:string;
    dob:string;
    addr:string;
    phone: string;
    txt:string[]=[]
    constructor(name,dob,addr,phone){
        this.name = name;
        this.dob = dob;
        this.addr = addr;
        this.phone = phone;
    }
}