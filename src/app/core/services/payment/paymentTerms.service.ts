
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './../../../app.constants';


@Injectable()
export class PaymentTermsService {

    constructor(private http: Http, private configuration: Configuration) {
         //this.actionUrl = configuration.Server + 'api/';
         //this.headers = new Headers();
        // this.headers.append('Content-Type', 'application/json');
        // this.headers.append('Accept', 'application/json');
    }
    
    public GetAll = (): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'paymentterms')
            .map(res => <any>res.json());
    }

    public GetById = (id: string): Observable<any> => {
       return this.http
           .get(this.configuration.actionUrl + 'paymentterms/' + id)
           .map(res => <any>res.json());
    }

    // public GetPeymentTermByMemberShipId = (id: string): Observable<any> => {
    //     return this.http
    //         .get(this.configuration.actionUrl + 'membership/paymentterms/' + id)
    //         .map(res => <any>res.json());
    // }

    public GetPeymentTermByMemberShipId = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
        return this.http.post(this.configuration.actionUrl + 'paymentterms/filter', toAdd, { headers: this.configuration.headers})
            .map(res => <any>res.json());
    }

    public GetPeymentTermByMemberId = (data: any): Observable<any> => {
        //console.log(data);
        const toAdd = JSON.stringify(data);
        return this.http.post(this.configuration.actionUrl + 'paymentschedules/filter', toAdd, { headers: this.configuration.headers})
            .map(res => <any>res.json());
    }

    public Add = (data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       return this.http.post(this.configuration.actionUrl + 'paymentterms', toAdd, { headers: this.configuration.headers})
           .map(res => <any>res.json());
    }

    public updateMemberPaymentTerms = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
        //console.log(toAdd);
        return this.http.put(this.configuration.actionUrl + 'members/paymentterms', toAdd, { headers: this.configuration.headers })
            .map(res => <any>res.json());
     }

    public Update = (id: string, data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       //console.log(toAdd);
       return this.http.put(this.configuration.actionUrl + 'paymentterms/' + id, toAdd, { headers: this.configuration.headers })
           .map(res => <any>res.json());
    }

    public Delete = (id: string): Observable<any> => {
       //console.log(id);
       return this.http
           .delete(this.configuration.actionUrl + 'paymentterms/' + id)
           .map(res => <any>res.json());
    }

}