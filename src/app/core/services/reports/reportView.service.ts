
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './../../../app.constants';


@Injectable()
export class ReportViewService {

    constructor(
        private http: Http, 
        private configuration: Configuration) {
    }
    
    public GetAllReportDataForMembers = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
        return this.http
            .post(this.configuration.actionUrl + 'report/members/',  toAdd, { headers: this.configuration.headers } )
            .map(res => <any>res.json());
    }

    public GetAllReportDataForPayments = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
        return this.http
            .post(this.configuration.actionUrl + 'report/payments/',  toAdd, { headers: this.configuration.headers } )
            .map(res => <any>res.json());
    }

    // public GetById = (id: any): Observable<any> => {
    //    return this.http
    //        .get(this.configuration.actionUrl + 'reports/' + id)
    //        .map(res => <any>res.json());
    // }

    // public GetPermissionBasedOnRoleAndForm = (data: any): Observable<any> => {
    //     const toAdd = JSON.stringify(data);
    //     return this.http.post(this.configuration.actionUrl + 'reports/rolepermission', toAdd, { headers: this.configuration.headers })
    //         .map(res => <any>res.json());
    //  }

   

}
