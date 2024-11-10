import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {
  public memberList:any = [];
  public member: any = {
    id: "",
    name: "",
    email: "",
    phoneN: "",
    address: "",
    joinDate: ""
  }
  constructor(private http:HttpClient){
    this.loadTable();
  }
  addMember() {
    console.log(this.member);
    this.http.post("http://localhost:8080/member/add-member",this.member).subscribe((data)=>{
      alert("Member added successfully");
      this.loadTable();
    })
  }

  loadTable(){
    this.http.get("http://localhost:8080/member/get-all").subscribe(data=>{
      console.log(data);
      this.memberList=data;
      
    })
  }
  
  deleteMemberById(id:any){
    console.log(id);
    this.http.delete(`http://localhost:8080/member/delete-by-id/${id}`).subscribe(data=>{
      alert("customer deleted !!!!");
      this.loadTable();
    })
  }

  public memberTemp:any={}
  updateMember(member:any){
    console.log(member);
    this.memberTemp=member;
    
  }
  updateMemberById(){
    this.http.put("http://localhost:8080/member/update-member",this.memberTemp).subscribe(data=>{
      alert("Member Updated!!!!!")
      this.loadTable();
    })
  }
}
