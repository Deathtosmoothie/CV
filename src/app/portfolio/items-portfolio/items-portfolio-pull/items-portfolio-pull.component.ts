import { Component, OnInit } from '@angular/core';

import {ItemSite} from "../item-site";

@Component({
  selector: 'app-items-portfolio-pull',
  templateUrl: './items-portfolio-pull.component.html',
  styleUrls: ['./items-portfolio-pull.component.css']
})
export class ItemsPortfolioPullComponent implements OnInit {

  all = new ItemSite('http://www.awolo.work',"url('https://st.kp.yandex.net/images/film_iphone/iphone360_677768.jpg')",'Awolo Digital',
      'Официальный сайт компании, в которой я работал');



  constructor() { }

  ngOnInit() {
  }

}
