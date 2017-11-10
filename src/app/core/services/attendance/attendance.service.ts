import { CommonDataService } from './../common/common-data.service';

import { AuthService } from '../common/auth.service';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import {RequestOptions, Request, RequestMethod} from '@angular/http';

import { Configuration } from './../../../app.constants';


@Injectable()
export class AttendanceService {

    headers: any;
    options: any;

    constructor(
        private http: Http, 
        private configuration: Configuration, 
        private _authService: AuthService,
        private _commonDataService: CommonDataService,
    ) {
        this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        this.options = new RequestOptions( {method: RequestMethod.Post, headers: this.headers });
    }
    
    public GetAll = (): Observable<any> => {
        return this.http
            .get(this.configuration.Server + 'AttendanceLog')
            .map(res => <any>res.json());
    }

    public GetById = (id: string): Observable<any> => {
        return this.http
           .get(this.configuration.Server + 'AttendanceLog/' + id)
           .map(res => <any>res.json());
    }

    public GetTodaysPunch = (data: any): Observable<any> => {
        
        let body = this.serializeObj(data);
        return this.http.post(this.configuration.Server + 'AttendanceLog/GetTodaysPunch',  body, this.options)
               .map(res => <any>res.json());
    }


    public Add = (data: any): Observable<any> => {
        const toAdd = this.serializeObj(data);
        return this.http.post(this.configuration.Server + 'AttendanceLog', toAdd, this.configuration.options)
           .map(res => <any>res.json());
    }

    public Update = (id: string, data: any): Observable<any> => {
        const toAdd = this.serializeObj(data);
        return this.http.put(this.configuration.Server + 'AttendanceLog/' + id, toAdd, this.configuration.options)
            .map(res => <any>res.json());
    }

    public Delete = (id: string): Observable<any> => {
       return this.http
           .delete(this.configuration.Server + 'AttendanceLog/' + id)
           .map(res => <any>res.json());
    }

    public serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    }

}