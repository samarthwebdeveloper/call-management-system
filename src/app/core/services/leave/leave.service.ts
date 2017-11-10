
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { Configuration } from './../../../app.constants';


@Injectable()
export class LeaveService {

    constructor(
        private http: Http, 
        private configuration: Configuration
    ) {
        
    }
    
    public GetAll = (): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'LeaveLog')
            .map(res => <any>res.json());
    }

    public GetById = (id: string): Observable<any> => {
        return this.http
           .get(this.configuration.actionUrl + 'LeaveLog/' + id)
           .map(res => <any>res.json());
    }

    public Add = (data: any): Observable<any> => {
        const toAdd = this.serializeObj(data);
        return this.http.post(this.configuration.actionUrl + 'LeaveLog', toAdd, this.configuration.options)
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