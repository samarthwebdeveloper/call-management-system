
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './../../../app.constants';

@Injectable()

export class PaymentScheduleService {

    constructor(
        private http: Http, 
        private configuration: Configuration
    ) {

    }
    
    public GetAllfilteredPaymentSchedulesData = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
        return this.http.post(this.configuration.actionUrl + 'paymentschedules/filter', toAdd, { headers: this.configuration.headers})
            .map(res => <any>res.json());
    }

    public GetAll = (): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'paymentschedules')
            .map(res => <any>res.json());
    }

    public GetById = (id: string): Observable<any> => {
       return this.http
           .get(this.configuration.actionUrl + 'paymentschedules/' + id)
           .map(res => <any>res.json());
    }

    public GetByInvoiceId = (id: string): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'paymentschedules/payment/' + id)
            .map(res => <any>res.json());
    }
    
    public Add = (data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       return this.http.post(this.configuration.actionUrl + 'paymentschedules', toAdd, { headers: this.configuration.headers})
           .map(res => <any>res.json());
    }

    public Update = (id: string, data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       //console.log(toAdd);
       return this.http.put(this.configuration.actionUrl + 'paymentschedules/' + id, toAdd, { headers: this.configuration.headers })
           .map(res => <any>res.json());
    }

    public Delete = (id: string): Observable<any> => {
       //console.log(id);
       return this.http
           .delete(this.configuration.actionUrl + 'paymentschedules/' + id)
           .map(res => <any>res.json());
    }

}