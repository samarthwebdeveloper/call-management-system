
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Headers, Response, Request, RequestMethod, URLSearchParams, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { Configuration } from './../../../app.constants';

declare var $: any;


@Injectable()
export class TabsService {

    requestUrl: string;
    responseData: any;
    handleError: any;

    constructor(
        private router: Router,
        private http: Http, 
        private configuration: Configuration
    ) {
        // this.actionUrl = configuration.Server + 'api/';
        // this.headers = new Headers();
        // this.headers.append('Content-Type', 'application/json');
        // this.headers.append('Accept', 'application/json');
    }
    
    public GetAll = (formName: any): Observable<any> => {
       return this.http
           .get(this.configuration.actionUrl + 'formfields/' + formName)
           .map(res => <any>res.json());
    }

    public GetById = (id: number): Observable<any> => {
       return this.http
           .get(this.configuration.actionUrl + 'formfieldByID/' + id)
           .map(res => <any>res.json());
    }

    public Add = (data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       return this.http.post(this.configuration.actionUrl + 'formfields/add', toAdd, { headers: this.configuration.headers })
           .map(res => <any>res.json());
    }

    public Update = (id: number, data: any): Observable<any> => {
       const toAdd = JSON.stringify(data);
       //console.log(toAdd);
       return this.http.put(this.configuration.actionUrl + 'formfields/' + id, toAdd, { headers: this.configuration.headers })
           .map(res => <any>res.json());
    }

    public Delete = (id: number): Observable<any> => {
       //console.log(id);
       return this.http
           .delete(this.configuration.actionUrl + 'formfields/' + id)
           .map(res => <any>res.json());
    }

    public GetAllProvince = (): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'lookup/province')
            .map(res => <any>res.json());
    }

     public GetAllDistrict = (): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'lookup/district')
            .map(res => <any>res.json());
    }

     public GetAllArea = (): Observable<any> => {
        return this.http
            .get(this.configuration.actionUrl + 'lookup/area')
            .map(res => <any>res.json());
    }

    public upload = (data: any): Observable<any> => {
        const toAdd = JSON.stringify(data);
        return this.http.post(this.configuration.actionUrl + 'uploads', toAdd, { headers: this.configuration.headers })
            .map(res => <any>res.json());
     }

    public postWithFile (url: string, postData: any, files: File[]) {
        
            let headers = new Headers();
            let formData:FormData = new FormData();
            formData.append('files', files[0], files[0].name);
            console.log(formData);
            
            // For multiple files
            // for (let i = 0; i < files.length; i++) {
            //     formData.append(`files[]`, files[i], files[i].name);
            // }
        
            if(postData !=="" && postData !== undefined && postData !==null){
              for (var property in postData) {
                  if (postData.hasOwnProperty(property)) {
                      formData.append(property, postData[property]);
                  }
              }
            } 
            var returnReponse = new Promise((resolve, reject) => {
            console.log(formData);

            this.http
                .post(this.configuration.actionUrl + url, formData, {
                headers: headers
                }).subscribe(
                    res => {
                        this.responseData = res.json();
                        resolve(this.responseData);
                    },
                    error => {
                        //this.router.navigate(['/login']);
                        reject(error);
                    }
                );
            });
            return returnReponse;
    }

}


