import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';
import {MatCardModule} from '@angular/material/card';
import swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  constructor(private userService:UserService, private snack:MatSnackBar){}
  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',              
    phone:'',
   
  }
ngOnInit(): void {
  // throw new Error('Method not implemented.');
}


formSubmit(){
  alert ('submit');
  console.log(this.user);
  //validation..............................
  if(this.user.username==''||this.user.username==null){
  // alert('user is required!!!');
   this.snack.open('Please enter Username!', '',{
    duration:3000,
    // verticalPosition:'top',
    // horizontalPosition:'right'
   });
    return; 
  }
  // if(this.user.username.includes(this.user.username)){
  //   this.snack.open('UserName exists!!!!!!', '',{
  //    duration:3000,
  //   });
  //    return;
  // }
  
  if(this.user.password==''||this.user.password==null){
    this.snack.open('Password Required!', '',{
     duration:3000,
    });
     return; 
}
if(this.user.firstName==''||this.user.firstName==null){
  this.snack.open('FirstName Required!', '',{
   duration:3000,
  });
   return;
}
   if(this.user.lastName==''||this.user.lastName==null){
    this.snack.open('FirstName Required!', '',{
     duration:3000,
    });
     return;
  }
  if(this.user.email==''||this.user.email==null){
    this.snack.open('Email Required!', '',{
     duration:3000,
    });
     return;
      
  }
  if(this.user.phone==''||this.user.phone==null){
    this.snack.open('Enter mobile number!', '',{
     duration:3000,
    });
     return; 
}
  //call addu  ser function

  this.userService.addUser(this.user).subscribe(
   (data)=> {
      // next: (v) => console.log('sucessfully added'),
      // error: (e) => console.error('error adding user'),
      // complete: () => console.info('complete')

      console.log(data);
      swal.fire('success','Successfully added','success')
    },
    (error)=>{

      console.log(error);
      swal.fire('error','Successfully added','error')
      });
        }
    
}





