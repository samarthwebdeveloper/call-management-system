
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './../../../app.constants';


@Injectable()
export class SchemasService {

    constructor(
        private http: Http, 
        private configuration: Configuration
    ) {
    }
    
    public GetById = (collectionName: any): Observable<any> => {
       return this.http
           .get(this.configuration.actionUrl + '/' + collectionName + '/schemas')
           .map(res => <any>res.json());
    }
}
