import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.css']
})
export class CalloutComponent implements OnInit {

  @Input() lan: string;

  constructor() { }

  ngOnInit() {
  }

}
