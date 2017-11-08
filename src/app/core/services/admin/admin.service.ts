
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './../../../app.constants';


@Injectable()
export class AdminService {

    constructor(private http: Http, private configuration: Configuration) {
         //this.actionUrl = configuration.Server + 'api/';
         //this.headers = new Headers();
        // this.headers.append('Content-Type', 'application/json');
        // this.headers.append('Accept', 'application/json');
    }
    
    public GetAll = (): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'users')
            .map(res => <any>res.json());
    }

    public GetAllfilteredUserData = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
        // return this.http.post(this.configuration.actionUrl + 'members/pagelist/', toAdd, { headers: this.configuration.headers})
        return this.http.post(this.configuration.actionUrl + 'users/filter', toAdd, { headers: this.configuration.headers})
            .map(res => <any>res.json());
    }

    public GetById = (id: number): Observable<any> => {
       return this.http
           .get(this.configuration.actionUrl + 'users/' + id)
           .map(res => <any>res.json());
    }

    public Add = (data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       return this.http.post(this.configuration.actionUrl + 'users', toAdd, { headers: this.configuration.headers})
           .map(res => <any>res.json());
    }

    public Update = (id: number, data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       //console.log(toAdd);
       return this.http.put(this.configuration.actionUrl + 'users/' + id, toAdd, { headers: this.configuration.headers })
           .map(res => <any>res.json());
    }

    public ChangePassword = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
        return this.http.post(this.configuration.actionUrl + 'users/changepassword', toAdd, { headers: this.configuration.headers})
            .map(res => <any>res.json());
     }

    public Delete = (id: number): Observable<any> => {
       //console.log(id);
       return this.http
           .delete(this.configuration.actionUrl + 'users/' + id)
           .map(res => <any>res.json());
    }

    public Upload = (data: any): Observable<any> => {
          const headers = new Headers();
         headers.append('Accept', 'image/*');
         headers.delete('Content-Type');
        //const toAdd = JSON.stringify(data);
        return this.http.post(this.configuration.actionUrl + 'uploads', data, {headers:headers})
            .map(res => <any>res.json());
     }

   

}
