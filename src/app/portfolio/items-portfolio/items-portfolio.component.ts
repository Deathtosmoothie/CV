import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ItemsPortfolioPullComponent } from './items-portfolio-pull/items-portfolio-pull.component';


@Component({
  selector: 'app-items-portfolio',
  templateUrl: './items-portfolio.component.html',
  styleUrls: ['./items-portfolio.component.css']
})
export class ItemsPortfolioComponent implements AfterViewInit{

  @Input() category;

  items;

   @ViewChild(ItemsPortfolioPullComponent) itemsPull: ItemsPortfolioPullComponent;

  ngAfterViewInit() {

    this.ItemChoose;

  }


  ItemChoose(category: any) {

    this.items = this.itemsPull.allItems;
    if(category == 'all') {
      this.items = this.itemsPull.allItems;
    }

    else if (category == 'HTML5/CSS3') {
      this.items = this.itemsPull.HC;
    }

    else if (category == 'JavaScript/JQuery') {
      this.items = this.itemsPull.JS;
    }

    else if (category == 'PHP') {
      this.items = this.itemsPull.PHP;
    }

    else if (category == 'WordPress') {
      this.items = this.itemsPull.WP;
    }

    else if (category == 'Angular') {
      this.items = this.itemsPull.NG;
    }

  else {
      this.items = this.itemsPull.allItems;
    }
}






  constructor() { }


}
