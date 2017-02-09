import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  categories = ['all','HTML5/CSS3','JavaScript/JQuery','PHP','SASS'];

  onClick(category: any) {

      if(category == 'all') {
          alert('all clicked');
      }
      else {
          alert('another clicked');
      }
  }

  constructor() { }

  ngOnInit() {
  }

}
