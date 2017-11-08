
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './../../../app.constants';


@Injectable()
export class FormlistService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: Configuration) {
    }
    
    public GetAll = (): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'formlists')
            .map(res => <any>res.json());
    }

    public GetById = (id: number): Observable<any> => {
       return this.http
           .get(this.configuration.actionUrl + 'formlists/' + id)
           .map(res => <any>res.json());
    }

    // public GetFormFieldByFormId = (id: number): Observable<any> => {
    //     return this.http
    //         .get(this.configuration.actionUrl + 'form/formfields/' + id)
    //         .map(res => <any>res.json());
    //  }

     public GetFormListByFormListName = (formlistname: any): Observable<any> => {
        return this.http
        .get(this.configuration.actionUrl + 'formlists/' + formlistname)
        .map(res => <any>res.json());
     }

     public Add = (data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       return this.http.post(this.configuration.actionUrl + 'formlists', toAdd, { headers: this.configuration.headers})
           .map(res => <any>res.json());
    }

    public Update = (id: number, data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       //console.log(toAdd);
       return this.http.put(this.configuration.actionUrl + 'formlists/' + id, toAdd, { headers: this.configuration.headers })
           .map(res => <any>res.json());
    }

    public Delete = (id: number): Observable<any> => {
       //console.log(id);
       return this.http
           .delete(this.configuration.actionUrl + 'formlists/' + id)
           .map(res => <any>res.json());
    }

}
