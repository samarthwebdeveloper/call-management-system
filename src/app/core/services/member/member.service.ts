
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './../../../app.constants';


@Injectable()
export class MemberService {

    constructor(private http: Http, private configuration: Configuration) {
         //this.actionUrl = configuration.Server + 'api/';
         //this.headers = new Headers();
        // this.headers.append('Content-Type', 'application/json');
        // this.headers.append('Accept', 'application/json');
    }
    
    public GetAll = (): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'members')
            .map(res => <any>res.json());
    }

    public GetAllfilteredMemberData = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
        // return this.http.post(this.configuration.actionUrl + 'members/pagelist/', toAdd, { headers: this.configuration.headers})
        return this.http.post(this.configuration.actionUrl + 'members/filter', toAdd, { headers: this.configuration.headers})
            .map(res => <any>res.json());
    }

    public GetById = (id: number): Observable<any> => {
       return this.http
           .get(this.configuration.actionUrl + 'members/' + id)
           .map(res => <any>res.json());
    }

    public Add = (data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       return this.http.post(this.configuration.actionUrl + 'members', toAdd, { headers: this.configuration.headers})
           .map(res => <any>res.json());
    }

    public Update = (id: any, data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       //console.log(toAdd);
       return this.http.put(this.configuration.actionUrl + 'members/' + id, toAdd, { headers: this.configuration.headers })
           .map(res => <any>res.json());
    }

    public Delete = (id: number): Observable<any> => {
       //console.log(id);
       return this.http
           .delete(this.configuration.actionUrl + 'members/' + id)
           .map(res => <any>res.json());
    }

    public ChangePassword = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
        return this.http.post(this.configuration.actionUrl + 'members/changepassword', toAdd, { headers: this.configuration.headers})
            .map(res => <any>res.json());
     }

   

}
