import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  constructor(private httpService: HttpService) {}

  onSubmit(name: any, email: any, message: any) {

    this.httpService.sendData({name: name, email: email, message: message})
      .subscribe(
      data => console.log(data)
    );
  }
}
