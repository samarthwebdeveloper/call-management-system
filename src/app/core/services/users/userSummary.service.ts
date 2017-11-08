
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './../../../app.constants';


@Injectable()
export class UserSummaryService {

    constructor(private http: Http, private configuration: Configuration) {
         //this.actionUrl = configuration.Server + 'api/';
         //this.headers = new Headers();
        // this.headers.append('Content-Type', 'application/json');
        // this.headers.append('Accept', 'application/json');
    }
    
    public GetAllUsers = (): Observable<any> => {
         return this.http
         .get(this.configuration.actionUrl + 'users')
         .map(res => <any>res.json());
    }
    public GetAllfilteredUserData = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
        return this.http.post(this.configuration.actionUrl + 'users/filter', toAdd, { headers: this.configuration.headers})
            .map(res => <any>res.json());
    }

    public GetAllUserCountForRole = (): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'report/users/summary')
            .map(res => <any>res.json());
    }

    public GetAllMemberCountForRole = (data: any): Observable<any> => {
           const toAdd = JSON.stringify(data);
           return this.http.post(this.configuration.actionUrl + 'report/users/summary', toAdd, { headers: this.configuration.headers})
               .map(res => <any>res.json());
        }

    // public GetAllNewMemberCountForPayment = (data: any): Observable<any> => {
    //        const toAdd = JSON.stringify(data);
    //        return this.http.post(this.configuration.actionUrl + 'report/members/summary', toAdd, { headers: this.configuration.headers})
    //            .map(res => <any>res.json());
    //     }
    // public GetAllPaymentCountForPaymentItem = (data: any): Observable<any> => {
    //     const toAdd = JSON.stringify(data);
    //     return this.http.post(this.configuration.actionUrl + 'report/payments/summary', toAdd , { headers: this.configuration.headers})
    //                .map(res => <any>res.json());
    // }
   

}