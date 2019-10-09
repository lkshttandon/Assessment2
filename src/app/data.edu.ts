export class Edu{
    id:number;
    degree:string;
    marks:string;
    stream:string;
    college: string;
    txt:string[]=[]
    constructor(degree,marks,stream,college){
        this.degree = degree;
        this.marks = marks;
        this.stream = stream;
        this.college = college;
    }
}