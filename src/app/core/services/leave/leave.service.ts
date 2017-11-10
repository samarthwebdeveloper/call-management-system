
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { Configuration } from './../../../app.constants';


@Injectable()
export class LeaveService {

    headers: any;
    options: any;
    
    constructor(
        private http: Http, 
        private configuration: Configuration
    ) {
        this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        this.options = new RequestOptions( {method: RequestMethod.Post, headers: this.headers }); 
    }
    
    public GetAll = (data: any): Observable<any> => {
        let body = this.serializeObj(data);
        return this.http.post(this.configuration.Server + 'LeaveLog/GetList',  body, this.options)
               .map(res => <any>res.json());
    }

    public GetById = (id: string): Observable<any> => {
        return this.http
           .get(this.configuration.actionUrl + 'LeaveLog/' + id)
           .map(res => <any>res.json());
    }

    public Save = (data: any): Observable<any> => {
        let body = this.serializeObj(data);
        return this.http.post(this.configuration.Server + 'LeaveLog/Save',  body, this.options)
               .map(res => <any>res.json());
    }

    public Update = (id: string, data: any): Observable<any> => {
        const toAdd = this.serializeObj(data);
        return this.http.put(this.configuration.actionUrl + 'LeaveLog/' + id, toAdd, this.configuration.options)
            .map(res => <any>res.json());
    }

    public Delete = (id: string): Observable<any> => {
       return this.http
           .delete(this.configuration.actionUrl + 'LeaveLog/' + id)
           .map(res => <any>res.json());
    }

    public serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    }


}