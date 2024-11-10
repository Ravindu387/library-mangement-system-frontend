import { Component } from '@angular/core';
import { EncryptionService } from '../../services/encryption.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  email: any;
  password: any;
  validPassword: any;
  constructor(private http:HttpClient,private encryptionService: EncryptionService,private router: Router){}
  checkeEmail(){
    this.http.get(`http://localhost:8080/user/checkeEmail/${this.email}`,{}).subscribe((data)=>{
      console.log(data);
      if(data==false){
        alert("Email does not exist");
      }else{
        this.checkedPassword();
      }
    })
  }
  checkedPassword(){
    var encryptedPassword = this.encryptionService.encrypt(this.password);
    // this.password=encryptedPassword;
    this.http.get(`http://localhost:8080/user/checkePassword/${this.password}/${this.email}`,{}).subscribe((data)=>{
      console.log(data);
      if(data==false){
        alert("Password is incorrect");
      }else{
        alert("Login successful");
        this.router.navigate(['/dashboard']);
      }
    })
  }
}
