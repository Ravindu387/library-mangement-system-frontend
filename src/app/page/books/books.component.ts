import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  constructor(private http:HttpClient){
    this.loadDropdown();
    this.loadAuthorDropdown();
    this.loadTable();
  }
  ngOnInit(): void {
    this.loadDropdown();
    this.loadAuthorDropdown();
  }
  public categoryList:any = [];
  public bookList:any = [];
  public authorList:any = [];
  public book: any = {
    title: '',
    isbn: '',
    category: '',
    publicationYear: '',
    authorId: '',
    availability: '',
  }
  public category: any = {
    name: '',
    description: '',
  }
  addCategory(){
    console.log(this.category);
    this.http.post("http://localhost:8080/category/add-category",this.category).subscribe((data)=>{
      alert("Category added successfully");
      this.loadDropdown();
      this.loadAuthorDropdown();
    })
  }
  loadDropdown(){
    this.http.get("http://localhost:8080/category/get-all").subscribe(data=>{
      console.log(data);
      this.categoryList=data;
    })
  }
  loadAuthorDropdown(){
    this.http.get("http://localhost:8080/author/get-all").subscribe(data=>{
      console.log(data);
      this.authorList=data;
    })
  }
  addBook() {
    console.log(this.book);
    this.http.post("http://localhost:8080/book/add-book",this.book).subscribe((data)=>{
      alert("Book added successfully");
      this.loadTable();
    })
  }
  public bookTemp:any={}
  updateBook(book:any){
    console.log(book);
    this.bookTemp=book;
    
  }
  loadTable(){
    this.http.get("http://localhost:8080/book/get-all").subscribe(data=>{
      console.log(data);
      this.bookList=data;
      
    })
  }
  deleteBookById(id:any){
    console.log(id);
    this.http.delete(`http://localhost:8080/book/delete-by-id/${id}`).subscribe(data=>{
      alert("Book deleted !!!!");
      this.loadTable();
    })
  }
  updateBookById(){
    this.http.put("http://localhost:8080/book/update-book",this.bookTemp).subscribe(data=>{
      alert("Book Updated!!!!!")
      this.loadTable();
    })
  }
}
