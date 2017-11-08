
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './../../../app.constants';


@Injectable()
export class MembershipService {

    constructor(private http: Http, private configuration: Configuration) {
    }
    
    public GetAll = (): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'memberships')
            .map(res => <any>res.json());
    }

    public GetById = (id: number): Observable<any> => {
       return this.http
           .get(this.configuration.actionUrl + 'memberships/' + id)
           .map(res => <any>res.json());
    }

    // public GetAllPaymentTermsbyMembershipId = (id: number): Observable<any> => {
    //     return this.http
    //         .get(this.configuration.actionUrl + 'membership/paymentterms/' + id)
    //         .map(res => <any>res.json());
    // }
    public GetAllPaymentTermsbyMembershipId = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
        return this.http.post(this.configuration.actionUrl + 'paymentterms/filter', toAdd, { headers: this.configuration.headers})
            .map(res => <any>res.json());
        // return this.http
        //     .get(this.configuration.actionUrl + 'membership/paymentterms/' + id)
        //     .map(res => <any>res.json());
    }

    public Add = (data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       return this.http.post(this.configuration.actionUrl + 'memberships', toAdd, { headers: this.configuration.headers})
           .map(res => <any>res.json());
    }

    public Update = (id: number, data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       //console.log(toAdd);
       return this.http.put(this.configuration.actionUrl + 'memberships/' + id, toAdd, { headers: this.configuration.headers })
           .map(res => <any>res.json());
    }

    public Delete = (id: number): Observable<any> => {
       //console.log(id);
       return this.http
           .delete(this.configuration.actionUrl + 'memberships/' + id)
           .map(res => <any>res.json());
    }

   

}
