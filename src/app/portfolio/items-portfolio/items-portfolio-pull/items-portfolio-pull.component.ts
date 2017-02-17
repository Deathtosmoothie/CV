import { Component, OnInit, Input } from '@angular/core';

import {ItemSite} from "../item-site";

@Component({
  selector: 'app-items-portfolio-pull',
  templateUrl: './items-portfolio-pull.component.html',
  styleUrls: ['./items-portfolio-pull.component.css']
})
export class ItemsPortfolioPullComponent implements OnInit {

    @Input() category;

//allItems = new ItemSite('http://www.awolo.work',"url('https://st.kp.yandex.net/images/film_iphone/iphone360_677768.jpg')",
//            'Awolo Digital');



    allItems: Array<ItemSite> = [
        new ItemSite('http://www.awolo.work',
            "url('https://st.kp.yandex.net/images/film_iphone/iphone360_677768.jpg')",
            'Awolo Digital'),
        new ItemSite('https://www.fastforms.co',
            "url('https://st.kp.yandex.net/images/film_iphone/iphone360_677768.jpg')",
            'Fastforms')
    ];

    PHP: Array<ItemSite> = [
        new ItemSite('https://www.fastforms.co',
            "url('https://st.kp.yandex.net/images/film_iphone/iphone360_677768.jpg')",
            'Fastforms'),
        new ItemSite('http://www.мегакам.рф',
            "url('https://st.kp.yandex.net/images/film_iphone/iphone360_677768.jpg')",
            'Мегакам')
    ];

    constructor() { }

  ngOnInit() {
  }

}
