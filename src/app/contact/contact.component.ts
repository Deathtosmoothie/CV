import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import {HttpService} from './http.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

    @Input() lan: string;

  constructor(private httpService: HttpService) {}

    statusMsg = '';

  ngOnInit() {

  }

  onSubmit(name: any, email: any, message: any) {

      if(name == '' || email == '') {
          this.statusMsg = '';
          return
      }
      else {
          this.httpService.sendData({name: name, email: email, message: message})
              .subscribe(
                  data => console.log(data)

              );
          if(this.lan == 'ru') {
              this.statusMsg = 'Отправлено!';
          }
          else if(this.lan == 'en') {
              this.statusMsg = 'Sended!';
          }
          else {
              this.statusMsg = 'Отправлено!';
          }


      }

  }
}
