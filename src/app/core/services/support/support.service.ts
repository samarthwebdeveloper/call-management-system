
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


import { Configuration } from './../../../app.constants';


@Injectable()
export class SupportService {

    constructor(private http: Http, private configuration: Configuration) {
        // this.actionUrl = configuration.Server + 'api/';
        // this.headers = new Headers();
        // this.headers.append('Content-Type', 'application/json');
        // this.headers.append('Accept', 'application/json');
    }
    
    public GetAll = (): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'supports')
            .map(res => <any>res.json());
    }

    public GetById = (id: any): Observable<any> => {
       return this.http
           .get(this.configuration.actionUrl + 'supports/' + id)
           .map(res => <any>res.json());
    }

    public Add = (data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       return this.http.post(this.configuration.actionUrl + 'supports', toAdd, { headers: this.configuration.headers })
           .map(res => <any>res.json());
    }

    public getbyfilter = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
        return this.http.post(this.configuration.actionUrl + 'supports/filter', toAdd, { headers: this.configuration.headers })
            .map(res => <any>res.json());
     }

    public Update = (id: number, data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       return this.http.put(this.configuration.actionUrl + 'supports/' + id, toAdd, { headers: this.configuration.headers })
           .map(res => <any>res.json());
    }

    public Updateresponse = (data: any): Observable<any> => {        
        const toAdd = JSON.stringify(data);
        return this.http.put(this.configuration.actionUrl + 'supports/' , toAdd, { headers: this.configuration.headers })
            .map(res => <any>res.json());
     }

    public Delete = (id: number): Observable<any> => {
       //console.log(id);
       return this.http
           .delete(this.configuration.actionUrl + 'supports/' + id)
           .map(res => <any>res.json());
    }

}
