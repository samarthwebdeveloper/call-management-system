import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class Configuration {

    public Server: string;    
    public actionUrl: string;
    public headers: Headers = new Headers();
    
    constructor() {
       this.headers.append('Content-Type', 'application/json');
       this.headers.append('Accept', 'application/json');
        if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
            this.Server = 'http://localhost:3001/';
           this.actionUrl = this.Server + 'api/';
        } else if (location.hostname === '52.163.113.185') {
            this.Server = 'http://52.163.113.185:3001/';
            this.actionUrl = this.Server + 'api/';
        } else if  (location.hostname === '132.148.135.210' || location.hostname === 'app.timesvacanza.com') {
            this.Server = 'http://app.timesvacanza.com/';
            this.actionUrl = this.Server + 'api/';
        }

    }
}
