import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  isShowForm =false;
  students =[
    { maSV: 'M01', ho:'Nguyễn Thị',ten:'Thảo Ly',khoa:'Tin',date:'20/08/2000',gender:'Nữ'},
    { maSV: 'M02', ho:'Phạm Hồ',ten:'Minh Thuận',khoa:'Tin',date:'16/12/1999',gender:'Nam'},
    { maSV: 'M03', ho:'Nguyễn',ten:'Uyên',khoa:'Tin',date:'20/08/2000',gender:'nữ'},
  ];
  student={maSV:'',ho:'',ten:'',khoa:'',date:'',gender:''};
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.students.push(this.student);
  }
  edit(index: any){
    this.student =this.students[index];

  }
  delete(maSV:string){
     const index= this.students.findIndex(sv => sv.maSV === maSV);
    this.students.splice(index,1);
    }
  save(index:any){
    this.student =this.students[index];
  }
}
