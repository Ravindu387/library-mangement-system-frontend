import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {
  public authorList:any = [];
  public author: any = {
    name: '',
    biography: '',
  }
  constructor(private http:HttpClient){
    this.loadTable();
  }

addAuthor(){
  console.log(this.author);
  this.http.post("http://localhost:8080/author/add-author",this.author).subscribe((data)=>{
    alert("Author added successfully");
    this.loadTable();
  })
}
loadTable(){
  this.http.get("http://localhost:8080/author/get-all").subscribe(data=>{
    console.log(data);
    this.authorList=data;
  })
}
updateAuthor(){
  console.log(this.author);
  this.http.put("http://localhost:8080/author/update-author",this.authorTemp).subscribe((data)=>{
    alert("Author updated successfully");
    this.loadTable();
  })
}
public authorTemp:any={}
  loadAuthor(author:any){
    console.log(author);
    this.authorTemp=author;
    
  }
  deleteAuthorById(id:any){
    console.log(id);
    this.http.delete(`http://localhost:8080/author/delete-by-id/${id}`).subscribe(data=>{
      alert("customer deleted !!!!");
      this.loadTable();
    })
  }
}
