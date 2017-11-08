
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './../../../app.constants';


@Injectable()
export class SeasonCalendarService {

    constructor(
        private http: Http, 
        private configuration: Configuration
    ) {
    }
    
    public GetAll = (): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'seasoncalendars')
            .map(res => <any>res.json());
    }

    public GetByfilter = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
        return this.http.post(this.configuration.actionUrl + 'seasoncalendars/filter', toAdd, { headers: this.configuration.headers})
            .map(res => <any>res.json());
     }

    public GetWeekListByYear = (year: number): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'seasoncalendars/seasonweeks/' + year)
            .map(res => <any>res.json());
     }

     public ClearSeasonByYear = (year: number): Observable<any> => {
        const toAdd = JSON.stringify({});
        return this.http
            .put(this.configuration.actionUrl + 'seasoncalendars/seasonweeks/' + year, toAdd)
            .map(res => <any>res.json());
     }

    public GetById = (id: string): Observable<any> => {
       return this.http
           .get(this.configuration.actionUrl + 'seasoncalendars/' + id)
           .map(res => <any>res.json());
    }

    public Add = (data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       return this.http.post(this.configuration.actionUrl + 'seasoncalendars', toAdd, { headers: this.configuration.headers})
           .map(res => <any>res.json());
    }

    public Update = (id: string, data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       //console.log(toAdd);
       return this.http.put(this.configuration.actionUrl + 'seasoncalendars/' + id, toAdd, { headers: this.configuration.headers })
           .map(res => <any>res.json());
    }

    public Delete = (id: string): Observable<any> => {
       //console.log(id);
       return this.http
           .delete(this.configuration.actionUrl + 'seasoncalendars/' + id)
           .map(res => <any>res.json());
    }

}