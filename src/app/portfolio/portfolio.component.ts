import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';

import { ItemsPortfolioComponent } from './items-portfolio/items-portfolio.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit {

  @Input() lan: string;

  categories = ['all','HTML5/CSS3','JavaScript/JQuery','PHP','WordPress','Angular'];

  @ViewChild(ItemsPortfolioComponent) itemsChoose: ItemsPortfolioComponent;

  ngAfterViewInit() {

    this.onClick(this.category);

  }

  onClick(category: any) {

    this.category = category;
    this.itemsChoose.ItemChoose(category);

  }

    category;

  constructor() { }

  ngOnInit() {
  }

}
