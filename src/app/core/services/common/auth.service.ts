
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { UserModel } from './../../models/auth/user.model';
import { Configuration } from './../../../app.constants';

@Injectable()
export class AuthService {
  auth_password: string;
  auth_email: string;
  auth_token: string; 
  auth_role: string;
  auth_roletype: string;
  auth_id: string;
  auth_user: any;
//   customer_servicer_id : string;
//   customer_servicer_urlname : string;
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  currentUser: UserModel;

   constructor(private configuration: Configuration) {
   }
  login(user) { 
     localStorage.setItem('currentUser', JSON.stringify(user));
     this.auth_password = user.password;
     this.auth_email = user.username;
     this.auth_token = user.token;
     this.auth_role = user.role;
     this.auth_roletype = user.roletype;
     this.auth_id = user._id;
     this.auth_user = user.user;
     this.configuration.headers.delete('authtoken');
     this.configuration.headers.delete('authkey');
     this.configuration.headers.append('authtoken',user.token);
     this.configuration.headers.append('authkey',user._id);
    // localStorage.setItem('profilePicPath', JSON.stringify(user.user.profile_picture));
  }

  isLoggedIn() {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      
      if (this.currentUser) {
        //this.setBodyClass();
        return true; 
      }else {
         return false;
        }
  }

  getLoginUser() {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.auth_password = this.currentUser.password;
      this.auth_email = this.currentUser.username;
      this.auth_token = this.currentUser.token;
      this.auth_role = this.currentUser.role;
      this.auth_roletype = this.currentUser.roletype;
      
      this.auth_id = this.currentUser._id;
      this.auth_user = this.currentUser.user;
      if(!this.configuration.headers.has('authtoken')) {
        this.configuration.headers.delete('authtoken');
        this.configuration.headers.append('authtoken',this.currentUser.token);
      }
      if(!this.configuration.headers.has('authkey')) {
        this.configuration.headers.delete('authkey');
        this.configuration.headers.append('authkey',this.currentUser._id);
      }
      return this.currentUser;
      
  }

//   getUserProfile(user_data){
//     this.customer_servicer_id = user_data._id;
//     this.customer_servicer_urlname = user_data.urlname;
//   }

  logout(): void {
    //this.removeBodyClass();
    localStorage.removeItem('currentUser');
    this.auth_password = '';
    this.auth_email = '';
    this.auth_token = '';
    this.auth_role = '';
    this.auth_id = '';
    this.auth_user = '';
    // this.customer_servicer_id = '';
    // this.customer_servicer_urlname = '';
  }
}
