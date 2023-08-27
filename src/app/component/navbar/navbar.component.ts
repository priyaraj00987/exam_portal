import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  user :any;
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
   this.isLoggedIn = this.login.isLogin();
   this.user = this.login.getUser();
   this.login.loginStatusSubject.asObservable().subscribe((data:any) => {
    this.user=this.login.getUser();
   });
   
   
  }
constructor(public login: LoginService){}
public logout(){
  this.login.logout();
  this.isLoggedIn=false;
  window.location.reload();
 // this.login.loginStatusSubject.next(false);
}

}
