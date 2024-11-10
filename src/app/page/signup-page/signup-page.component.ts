import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EncryptionService } from '../../services/encryption.service';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  boolean: boolean = false;
  public user: any = {
    fname: '',
    email: '',
    phoneN: '',
    password: ''
  };
  checkedPhoneN(){
    console.log(this.user.phoneN);
    console.log(this.user.phoneN.length);
  if(this.user.phoneN.length==10){
    this.handleLogin(this.user.password);
    return true;
  }else{
    alert("Enter a valid phone number");
    return false;
  }
  
}
constructor(private http:HttpClient,private encryptionService: EncryptionService){}
public addCustomer(){
  this.http.post("http://localhost:8080/user/add-user",this.user).subscribe((data)=>{
    this.resetUser();  
    setTimeout(function() {
      alert("User added successfully");
    }, 500);
      
  })
}
  handleLogin(password: string) {
    // Encrypt password before sending to server
    var encryptedPassword = this.encryptionService.encrypt(password);
    console.log(encryptedPassword);
    this.addCustomer();
    
    // Later, if you need to decrypt
    const decryptedPassword = this.encryptionService.decrypt(encryptedPassword);
  }

  private resetUser() {
    this.user = {
      fname: '',
      email: '',
      phoneN: '',
      password: ''
    };
  }
  checkeEmail(){
    this.http.get(`http://localhost:8080/user/checkeEmail/${this.user.email}`,{}).subscribe((data)=>{
      console.log(data);
      if(data==false){
        this.checkedPhoneN();
      }else{
        alert("Email already exists");
      }
    })
  }

}
