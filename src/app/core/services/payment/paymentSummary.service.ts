
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './../../../app.constants';


@Injectable()
export class PaymentSummaryService {

    constructor(private http: Http, private configuration: Configuration) {
         //this.actionUrl = configuration.Server + 'api/';
         //this.headers = new Headers();
        // this.headers.append('Content-Type', 'application/json');
        // this.headers.append('Accept', 'application/json');
    }
  
    public GetAllMemberCountForMembership = (): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'report/members/summary')
            .map(res => <any>res.json());
    }

    public GetAllMemberCountForPayment = (data: any): Observable<any> => {
           const toAdd = JSON.stringify(data);
        //    return this.http.post(this.configuration.actionUrl + 'paymentschedule/summary/', toAdd, { headers: this.configuration.headers})
        return this.http.put(this.configuration.actionUrl + 'report/payments/summary', toAdd, { headers: this.configuration.headers})
               .map(res => <any>res.json());
    }
    public GetAllMemberCountForPaymentOverDue = (param: string): Observable<any> => {
         return this.http.get(this.configuration.actionUrl + 'report/payments/summary/'+ param, { headers: this.configuration.headers})
                .map(res => <any>res.json());
     }


}