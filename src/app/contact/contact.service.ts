import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Email} from "./email";



@Injectable()
export class ContactService {
  constructor (private _http: Http) {}

  private _contactUrl = 'app/contact/email.php';

  postEmail(newMail: Email): Observable<string>{
    let body = `name=${newMail.name}&email=${newMail.email}&message=${newMail.message}`;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this._contactUrl, body, options).map(res =>  <string> res.json());
        //.catch(this.handleError)
  }

  private handleError (error: Response) {

    console.error('Error in retrieving news: ' + error);
    return Observable.throw(error.json().error || 'Server error');
  }
}