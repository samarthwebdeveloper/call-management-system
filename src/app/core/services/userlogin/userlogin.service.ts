import { CommonDataService } from './../common/common-data.service';

import { AuthService } from '../common/auth.service';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import {RequestOptions, Request, RequestMethod} from '@angular/http';

import { Configuration } from './../../../app.constants';


@Injectable()
export class UserloginService {

    private actionUrl: string;
    private headers: Headers;

    constructor(
        private http: Http, 
        private configuration: Configuration, 
        private _authService: AuthService,
        private _commonDataService: CommonDataService,
    ) {

        this.actionUrl = configuration.Server;

        this.headers = new Headers();
        //this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // this.headers.append('dataType', 'json');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public login = (data: any): Observable<any> => {

    //    let toAdd = JSON.stringify(data);
    //    console.log(this.actionUrl + 'Login/Login');
    //    return this.http.post(this.actionUrl + 'Login/Login', toAdd, { headers: this.headers })
    //        .map(res => <any>res.json());


    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });

    let body = this.serializeObj(data);

    return this.http.post(this.actionUrl + 'Login/Login',  body, options)
           .map(res => <any>res.json());

    }

    
    public logout = (): any => {
           this._authService.logout();
           return true;
    }

    public GetLoginDetailById = (id: any): Observable<any> => {
         const roleType = this._authService.auth_roletype;
         if(roleType === 'A') {
              return this.http
                .get(this.actionUrl + 'users/' + id)
                .map(res => <any>res.json());
         } else if (roleType === 'M') {
             return this.http
           .get(this.actionUrl + 'members/' + id)
           .map(res => <any>res.json());
         }
    }

    private serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    
        return result.join("&");
    }
}
