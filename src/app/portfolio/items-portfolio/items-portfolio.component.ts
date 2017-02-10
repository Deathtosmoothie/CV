import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-items-portfolio',
  templateUrl: './items-portfolio.component.html',
  styleUrls: ['./items-portfolio.component.css']
})
export class ItemsPortfolioComponent implements OnInit {

    @Input() category;


  showBlock() {

        let num;

        if (this.category == 'all') {
            num = '1';
        }
        else {
            num = 'wait..';
        }

        return num;
}





  constructor() { }




  ngOnInit() {
  }

}
