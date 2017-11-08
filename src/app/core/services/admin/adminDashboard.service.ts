
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './../../../app.constants';


@Injectable()
export class AdminDashboardService {

    selectMonthYearArray: any[] = [];
    defaultLabelArr: string[] = [];
    defaultseriesArr: number[] = [];

    constructor(private http: Http, private configuration: Configuration) {
         //this.actionUrl = configuration.Server + 'api/';
         //this.headers = new Headers();
        // this.headers.append('Content-Type', 'application/json');
        // this.headers.append('Accept', 'application/json');
        this.loadMonthArray();
    }
    
    public GetTotalMember = (): Observable<any> => {
       return this.http
           .get(this.configuration.actionUrl + 'dashboard/member/total')
           .map(res => <any>res.json());
    }
    public GetNewMemberCount = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
            return this.http.post(this.configuration.actionUrl + 'dashboard/member/recent', toAdd, { headers: this.configuration.headers})
            .map(res => <any>res.json());
     }

     public GetRecentPaymentAmount = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
            return this.http.post(this.configuration.actionUrl + 'dashboard/payment/recent', toAdd, { headers: this.configuration.headers})
            .map(res => <any>res.json());
     }
     public GetReceivedPaymentList = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
            return this.http.post(this.configuration.actionUrl + 'dashboard/payment/received', toAdd, { headers: this.configuration.headers})
            .map(res => <any>res.json());
     }
     public GetDuePaymentList = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
            return this.http.post(this.configuration.actionUrl + 'dashboard/payment/due', toAdd, { headers: this.configuration.headers})
            .map(res => <any>res.json());
     }
     public GetMemberCountMonthwise = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
            return this.http.post(this.configuration.actionUrl + 'dashboard/member/monthwise', toAdd, { headers: this.configuration.headers})
            .map(res => <any>res.json());
     }
     public GetPaymentAmountMonthwise = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
            return this.http.post(this.configuration.actionUrl + 'dashboard/payment/monthwise', toAdd, { headers: this.configuration.headers})
            .map(res => <any>res.json());
     }

     public loadMonthArray(currentYear: number = 0, currentMonth: number = 0) {
        let theMonths = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
        let today = new Date();
        let aMonth = today.getMonth();
        let aYear = today.getFullYear();
        if (currentYear !== 0) {
            if (currentMonth !== 0) {
                aYear = currentYear;
                aMonth = currentMonth;
            }
        }
        let i;
        for (i = 0; i < 12; i++) {
            this.selectMonthYearArray.push({ year: aYear, month: theMonths[aMonth], monthNo: aMonth + 1 });
            if (aMonth === 0) {
                aMonth = 12;
                aYear = aYear - 1;
            }
            aMonth--;
        }
        this.selectMonthYearArray = this.selectMonthYearArray.reverse();
        if (this.selectMonthYearArray !== [])  {
            this.selectMonthYearArray.forEach(ele => {
                this.defaultLabelArr.push(ele.month);
                this.defaultseriesArr.push(0);
            });
        }

    }


}
