
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './../../../app.constants';


@Injectable()
export class PaymentService {

    constructor(
        private http: Http, 
        private configuration: Configuration
    ) {
    }
    
    public GetReceipt = (): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'paymentsettings/numbering/RECEIPT')
            .map(res => <any>res.json());
    }

    public GetInvoice = (): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'paymentsettings/numbering/INVOICE')
            .map(res => <any>res.json());
    }

    public GetAllfilteredPaymentData = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
        return this.http.post(this.configuration.actionUrl + 'payments/filter', toAdd, { headers: this.configuration.headers})
            .map(res => <any>res.json());
    }

    public GetAll = (): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'payments')
            .map(res => <any>res.json());
    }

    public GetPaymentImport = (): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'paymentimports')
            .map(res => <any>res.json());
    }

    public GetById = (id: string): Observable<any> => {
       return this.http
           .get(this.configuration.actionUrl + 'payments/' + id)
           .map(res => <any>res.json());
    }

    public OverduePayment = (data: any): Observable<any> => {
        //console.log(data);
        const toAdd = JSON.stringify(data);
        return this.http.post(this.configuration.actionUrl + 'payments/filter', toAdd, { headers: this.configuration.headers})
            .map(res => <any>res.json());
     }

    public Add = (data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       return this.http.post(this.configuration.actionUrl + 'payments', toAdd, { headers: this.configuration.headers})
           .map(res => <any>res.json());
    }

    public Update = (id: string, data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       //console.log(toAdd);
       return this.http.put(this.configuration.actionUrl + 'payments/' + id, toAdd, { headers: this.configuration.headers })
           .map(res => <any>res.json());
    }

    public Delete = (id: string): Observable<any> => {
       //console.log(id);
       return this.http
           .delete(this.configuration.actionUrl + 'payments/' + id)
           .map(res => <any>res.json());
    }

}