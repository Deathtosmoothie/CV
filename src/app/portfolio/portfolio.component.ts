import { Component, OnInit } from '@angular/core';

import { ItemsPortfolioComponent } from './items-portfolio/items-portfolio.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  categories = ['all','HTML5/CSS3','JavaScript/JQuery','PHP','WordPress'];



  onClick(category: any) {

    this.category = category;
      alert(category);
  }

    category;

  constructor() { }

  ngOnInit() {
  }

}
