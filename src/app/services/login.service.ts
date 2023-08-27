import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject= new Subject<boolean>();

  constructor(private http:HttpClient) { }


  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }

  //generate token

  public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/generate-token`,loginData)
  }


 // login user
  public loginUser(token:any){
    localStorage.setItem("token",token);

   return true;
 }


     //islogin user
   public isLogin():boolean{
    let tokenstr= localStorage.getItem('token');
    if(tokenstr==null||tokenstr==undefined||tokenstr=='')
    return false;
    else
    return true;
  }

  //logout user remove token 
  public logout(){
    localStorage.removeItem('token');
    return true;
  }

  // get token
  public getToken():any{
    return localStorage.getItem('token');
  }

  //set userDetails
  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }
  //getUser
  public getUser(){
    let userStr=(localStorage.getItem('user'));
    if(userStr!==null){
      return JSON.parse(userStr);
  }else{
    this.logout();
    return null;
  }
  }


//get user role
public getUserRole(){
  let user=this.getUser();
  return user.authorities[0].authority;
}

  }
