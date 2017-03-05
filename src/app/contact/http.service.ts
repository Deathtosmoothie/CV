import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

    //getData() {
    //    this.http.get();
    //}

sendData(name: any) {
    const body = JSON.stringify(name);
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('https://cvmail-9d404.firebaseio.com/data.json', body, {
        headers: headers
    });
}
}
