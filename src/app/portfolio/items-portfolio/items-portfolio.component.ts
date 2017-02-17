import { Component, OnInit, Input } from '@angular/core';
import { ItemsPortfolioPullComponent } from './items-portfolio-pull/items-portfolio-pull.component';




@Component({
  selector: 'app-items-portfolio',
  templateUrl: './items-portfolio.component.html',
  styleUrls: ['./items-portfolio.component.css']
})
export class ItemsPortfolioComponent {



    @Input() category;






  constructor() { }




  ngOnInit() {
  }

}
