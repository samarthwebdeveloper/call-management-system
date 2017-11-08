import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './../../../app.constants';

@Injectable()
export class UserloginService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, 
        private configuration: Configuration,
) {

        this.actionUrl = configuration.Server + 'api/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        // this.updateProfileData();
    }

    public getAllCountry = (): Observable<any> => {
        return this.http
            .get(this.actionUrl + 'lookup/country')
            .map(res => <any>res.json());
    }

     public getAllDistrict = (): Observable<any> => {
        return this.http
            .get(this.actionUrl + 'lookup/district')
            .map(res => <any>res.json());
    }

     public getAllCity = (): Observable<any> => {
        return this.http
            .get(this.actionUrl + 'lookup/city')
            .map(res => <any>res.json());
    }



}