import { Component, OnInit, Input } from '@angular/core';
import { ItemsPortfolioPullComponent } from './items-portfolio-pull/items-portfolio-pull.component';



@Component({
  selector: 'app-items-portfolio',
  templateUrl: './items-portfolio.component.html',
  styleUrls: ['./items-portfolio.component.css']
})
export class ItemsPortfolioComponent {

    PHP = [1,2,3,4,5];

    @Input() category;

    //test = "url('/assets/images/p1-1.jpg')";



  constructor() { }




  ngOnInit() {
  }

}
