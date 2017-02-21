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
            "url('/assets/images/portfolio/awolo.work.jpg')",
            'Awolo Digital'),
        new ItemSite('https://fastforms.co',
            "url('/assets/images/portfolio/fastforms.jpg')",
            'Fastforms'),
        new ItemSite('http://blog.awolo.work',
            "url('/assets/images/portfolio/blog.jpg')",
            'Willding'),
        new ItemSite('http://www.devotecindustries.com',
            "url('/assets/images/portfolio/devotech.jpg')",
            'Devotecindustries'),
        new ItemSite('http://www.dharmaspring.com',
            "url('/assets/images/portfolio/dharmaspring.jpg')",
            'Dharmaspring'),
        new ItemSite('',
            "url('/assets/images/portfolio/dostoevskiy.jpg')",
            'Dostoevskiy'),
        new ItemSite('http://www.мегакам.рф',
            "url('/assets/images/portfolio/megacam.jpg')",
            'MegaCam'),
        new ItemSite('',
            "url('/assets/images/portfolio/kulikov.jpg')",
            'Kulikov Aleksey'),
        new ItemSite('',
            "url('/assets/images/portfolio/moodboard.jpg')",
            'Styledcollective'),
        new ItemSite('',
            "url('/assets/images/portfolio/okivoki.jpg')",
            'Okivoki'),
        new ItemSite('http://yapdomik.awolo.work',
            "url('/assets/images/portfolio/yapdomik.jpg')",
            'Yapdomik'),
        new ItemSite('http://www.thebears.ru',
            "url('/assets/images/portfolio/thebears.jpg')",
            'The Bears'),
        new ItemSite('',
            "url('/assets/images/portfolio/portfolio.jpg')",
            'Portfolio')
    ];

    PHP: Array<ItemSite> = [
      new ItemSite('http://www.devotecindustries.com',
        "url('/assets/images/portfolio/devotech.jpg')",
        'Devotecindustries'),
      new ItemSite('',
        "url('/assets/images/portfolio/okivoki.jpg')",
        'Okivoki')
    ];

    JS: Array<ItemSite> = [
      new ItemSite('http://www.awolo.work',
        "url('/assets/images/portfolio/awolo.work.jpg')",
        'Awolo Digital'),
      new ItemSite('',
        "url('/assets/images/portfolio/dostoevskiy.jpg')",
        'Dostoevskiy'),
      new ItemSite('http://www.мегакам.рф',
        "url('/assets/images/portfolio/megacam.jpg')",
        'MegaCam'),
      new ItemSite('',
        "url('/assets/images/portfolio/kulikov.jpg')",
        'Kulikov Aleksey'),
      new ItemSite('',
        "url('/assets/images/portfolio/moodboard.jpg')",
        'Styledcollective'),
      new ItemSite('',
        "url('/assets/images/portfolio/okivoki.jpg')",
        'Okivoki'),
      new ItemSite('http://yapdomik.awolo.work',
        "url('/assets/images/portfolio/yapdomik.jpg')",
        'Yapdomik'),
      new ItemSite('',
        "url('/assets/images/portfolio/portfolio.jpg')",
        'Portfolio')
    ];

    WP: Array<ItemSite> = [
      new ItemSite('http://blog.awolo.work',
        "url('/assets/images/portfolio/blog.jpg')",
        'Willding'),
      new ItemSite('http://www.thebears.ru',
        "url('/assets/images/portfolio/thebears.jpg')",
        'The Bears')
    ];

    HC: Array<ItemSite> = [
      new ItemSite('http://www.awolo.work',
        "url('/assets/images/portfolio/awolo.work.jpg')",
        'Awolo Digital'),
      new ItemSite('https://fastforms.co',
        "url('/assets/images/portfolio/fastforms.jpg')",
        'Fastforms'),
      new ItemSite('http://blog.awolo.work',
        "url('/assets/images/portfolio/blog.jpg')",
        'Willding'),
      new ItemSite('http://www.devotecindustries.com',
        "url('/assets/images/portfolio/devotech.jpg')",
        'Devotecindustries'),
      new ItemSite('http://www.dharmaspring.com',
        "url('/assets/images/portfolio/dharmaspring.jpg')",
        'Dharmaspring'),
      new ItemSite('http://www.мегакам.рф',
        "url('/assets/images/portfolio/megacam.jpg')",
        'MegaCam'),
      new ItemSite('',
        "url('/assets/images/portfolio/kulikov.jpg')",
        'Kulikov Aleksey'),
      new ItemSite('http://yapdomik.awolo.work',
        "url('/assets/images/portfolio/yapdomik.jpg')",
        'Yapdomik')
    ];

    constructor() { }

  ngOnInit() {
  }

}
