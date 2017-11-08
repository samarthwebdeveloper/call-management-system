
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Headers, Response, Request, RequestMethod, URLSearchParams, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { Configuration } from './../../../app.constants';

declare var $: any;


@Injectable()
export class UsersService {

    requestUrl: string;
    responseData: any;
    handleError: any;

    constructor(
        private router: Router,
        private http: Http, 
        private configuration: Configuration
    ) {
        
    }
    
    public GetAll = (): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'users')
            .map(res => <any>res.json());
    }


    public GetAllfilteredUserData = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
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
       return this.http.post(this.configuration.actionUrl + 'users/add', toAdd, { headers: this.configuration.headers })
           .map(res => <any>res.json());
    }

    public Update = (id: number, data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       //console.log(toAdd);
       return this.http.put(this.configuration.actionUrl + 'users/' + id, toAdd, { headers: this.configuration.headers })
           .map(res => <any>res.json());
    }

    public Delete = (id: number): Observable<any> => {
       //console.log(id);
       return this.http
           .delete(this.configuration.actionUrl + 'users/' + id)
           .map(res => <any>res.json());
    }
}