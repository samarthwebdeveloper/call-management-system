
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './../../../app.constants';


@Injectable()
export class PaymentrefundService {

    constructor(
        private http: Http, 
        private configuration: Configuration
    ) {
    }
    
    public GetAllfilteredPaymentRefundData = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
        return this.http.post(this.configuration.actionUrl + 'paymentrefund/filter', toAdd, { headers: this.configuration.headers})
            .map(res => <any>res.json());
    }

    public GetAll = (): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'paymentrefund')
            .map(res => <any>res.json());
    }

    public GetPaymentImport = (): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'paymentimports')
            .map(res => <any>res.json());
    }

    public GetById = (id: string): Observable<any> => {
       return this.http
           .get(this.configuration.actionUrl + 'paymentrefund/' + id)
           .map(res => <any>res.json());
    }

    public Add = (data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       return this.http.post(this.configuration.actionUrl + 'paymentrefund', toAdd, { headers: this.configuration.headers})
           .map(res => <any>res.json());
    }

    public Update = (id: string, data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       //console.log(toAdd);
       return this.http.put(this.configuration.actionUrl + 'paymentrefund/' + id, toAdd, { headers: this.configuration.headers })
           .map(res => <any>res.json());
    }

    public Delete = (id: string): Observable<any> => {
       //console.log(id);
       return this.http
           .delete(this.configuration.actionUrl + 'paymentrefund/' + id)
           .map(res => <any>res.json());
    }

}