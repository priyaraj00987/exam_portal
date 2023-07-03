import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  constructor(private userService:UserService,private snackBar: MatSnackBar){}
  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',              
    phone:'',
   
  }
ngOnInit(): void {
  throw new Error('Method not implemented.');
}


formSubmit(){
  alert ('submit');
  console.log(this.user);
  if(this.user.username==''||this.user.username==null){
    //alert('user is required!!!');
    this.snackBar.open('Please enter');
    return; 
  }

  //call addu  ser function

  this.userService.addUser(this.user).subscribe(
    {
      next: (v) => console.log('sucessfully added'),
      error: (e) => console.error('error adding user'),
      complete: () => console.info('complete')
    }
      );
}

}



