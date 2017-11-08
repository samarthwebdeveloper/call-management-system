import { Injectable } from '@angular/core';
import { Headers, Http, Response, ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './../../../app.constants';

@Injectable()
export class CommonService {

    constructor(private http: Http, private configuration: Configuration) {
         //this.actionUrl = configuration.Server + 'api/';
         //this.headers = new Headers();
        // this.headers.append('Content-Type', 'application/json');
        // this.headers.append('Accept', 'application/json');
    }
    
    // public GetAll = (): Observable<any> => {
    //     return this.http
    //         .get(this.configuration.actionUrl + 'lookups')
    //         .map(res => <any>res.json());
    // }

    // public GetById = (id: string): Observable<any> => {
    //    return this.http
    //        .get(this.configuration.actionUrl + 'lookups/' + id)
    //        .map(res => <any>res.json());
    // }

    public GetByCollection = (data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       return this.http.post(this.configuration.actionUrl + 'common', toAdd, { headers: this.configuration.headers})
           .map(res => <any>res.json());
    }

    public commonServiceByUrlMethodIdOrData = (url: string, method: string, id?: string, data?: any): Observable<any> => {
        let urlstring = this.configuration.actionUrl;

        // console.log(urlstring);
        if(url != '') {
            urlstring = urlstring + url;
            if(id != '') {
                urlstring = urlstring + id;
            }
            // console.log(urlstring);
            if(method != '') {
                if (method == 'GET') {
                    return this.http.get(urlstring)
                             .map(res => <any>res.json());
                } else if (method == 'GET' && (data != null || '')) {
                    const toAdd = JSON.stringify(data);
                    return this.http.get(urlstring, toAdd)
                    .map(res => <any>res.json());
                } else if (method == 'DELETE' && (id != null || '')) {
                    return this.http
                    .delete(urlstring)
                    .map(res => <any>res.json());
                }
             } else {
                return this.http.get(urlstring, { headers: this.configuration.headers})
                .map(res => <any>res.json());
            }
        }
        

    }


    public commonServiceByUrlMethodData = (url: string, method: string, data: any, id?: string): Observable<any> => {
        let urlstring = this.configuration.actionUrl;
        if(url != '') {
            urlstring = urlstring + url;
            if(id != undefined && id != '') {
                urlstring = urlstring + id;
            }
            if(method != '') {
               if(method == 'POST' && (data != undefined || null)) {
                    const toAdd = JSON.stringify(data);
                    return this.http.post(urlstring, toAdd, { headers: this.configuration.headers})
                         .map(res => <any>res.json());
                } else if (method == 'PUT' && (data != undefined || null)) {
                    const toAdd = JSON.stringify(data);
                    return this.http.put(urlstring, toAdd, { headers: this.configuration.headers})
                         .map(res => <any>res.json());
                } 
             } else {
                const toAdd = JSON.stringify(data);
                return this.http.post(urlstring, toAdd, { headers: this.configuration.headers})
                .map(res => <any>res.json());
            }
        }
       

     }

     public convertToCSV = (data: any): Observable<any> => {
      
        const toAdd = JSON.stringify(data);

        return this.http.post(this.configuration.actionUrl + 'common/exporttocsv', toAdd, { headers: this.configuration.headers, responseType: ResponseContentType.Blob})
                     .map(res => res.blob())
            // .map(res => <any>res.json());
     }

     public convertToPDF = (data: any): Observable<any> => {
        
          const toAdd = JSON.stringify(data);
  
          return this.http.post(this.configuration.actionUrl + 'common/exporttopdf', toAdd, { headers: this.configuration.headers, responseType: ResponseContentType.Blob})
                       .map(res => res.blob())
              // .map(res => <any>res.json());
       }

}