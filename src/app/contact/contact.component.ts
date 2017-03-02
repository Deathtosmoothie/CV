import { Component, OnInit } from '@angular/core';
import {Email} from "./email";
import {ContactService} from "./contact.service";
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private _contactService : ContactService) { }
  ngOnInit() { }

  public message: Email = {name: '', email: '', message: ''};

  onSubmit() {
    this._contactService.postEmail(this.message).subscribe(
      response => this.handleResponse(response),
      error => this.handleResponse(error)
    );
  }

  handleResponse(response){
     console.log(`msg is: {response.status}`);

    if(response.status =='success'){
      this.message = {name: '', email: '', message: ''};
      alert('Success');
    }

    if(response.status =='error'){
      alert('Failed');
    }
  }
}
