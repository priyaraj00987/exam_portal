import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private login:LoginService,private snack:MatSnackBar){}

  public loginData={
    username:'',
    password:'', 
   };
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }

  formSubmit(){
    console.log("login form submited");
    alert ('submit');
    if(this.loginData.username.trim()==''||this.loginData.username==null){
      this.snack.open('UserName required!!!!!!', '',{
       duration:3000,
      });
       return;
    }
    if(this.loginData.password.trim()==''||this.loginData.password==null){
      this.snack.open('Password required!!!!!!', '',{
       duration:3000,
      });
       return;
    }

    //request server to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("success");
        console.log(data);
  },
  (error:any)=>{
    console.log("error");
    console.log(error);
  }
    );}  

}
