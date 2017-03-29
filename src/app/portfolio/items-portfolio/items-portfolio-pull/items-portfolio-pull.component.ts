import { Component, OnInit, Input } from '@angular/core';

import {ItemSite} from "../item-site";

@Component({
  selector: 'app-items-portfolio-pull',
  templateUrl: './items-portfolio-pull.component.html',
  styleUrls: ['./items-portfolio-pull.component.css']
})
export class ItemsPortfolioPullComponent implements OnInit {

    @Input() category;


    allItems: Array<ItemSite> = [
        new ItemSite('/resources/awolo/index.html',
            "url('/assets/images/portfolio/awolo.work.jpg')",
            'Awolo Digital'),
        new ItemSite('https://fastforms.co',
            "url('/assets/images/portfolio/fastforms.jpg')",
            'Fastforms'),
        new ItemSite('https://do-to-be.org/',
            "url('/assets/images/portfolio/blog.jpg')",
            'Do-to-Be'),
        new ItemSite('http://www.devotecindustries.com',
            "url('/assets/images/portfolio/devotech.jpg')",
            'Devotecindustries'),
        new ItemSite('http://www.dharmaspring.com',
            "url('/assets/images/portfolio/dharmaspring.jpg')",
            'Dharmaspring'),
        new ItemSite('/resources/alexander_kron/index.html',
            "url('/assets/images/portfolio/kron.jpg')",
            'Alexander Kron'),
        new ItemSite('/resources/megakam/index.html',
            "url('/assets/images/portfolio/megacam.jpg')",
            'MegaCam'),
        new ItemSite('/resources/kulikov/index.html',
            "url('/assets/images/portfolio/kulikov.jpg')",
            'Kulikov Aleksey'),
        new ItemSite('/resources/styledcollective/board_main.html',
            "url('/assets/images/portfolio/moodboard.jpg')",
            'Styledcollective'),
        new ItemSite('/resources/okivoki/index.html',
            "url('/assets/images/portfolio/okivoki.jpg')",
            'Okivoki'),
        new ItemSite('http://yapdomik.ru/',
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
      new ItemSite('/resources/okivoki/index.html',
         "url('/assets/images/portfolio/okivoki.jpg')",
         'Okivoki')
    ];

    JS: Array<ItemSite> = [
      new ItemSite('/resources/awolo/index.html',
        "url('/assets/images/portfolio/awolo.work.jpg')",
        'Awolo Digital'),
      new ItemSite('/resources/alexander_kron/index.html',
            "url('/assets/images/portfolio/kron.jpg')",
            'Alexander Kron'),
      new ItemSite('/resources/megakam/index.html',
        "url('/assets/images/portfolio/megacam.jpg')",
        'MegaCam'),
      new ItemSite('/resources/kulikov/index.html',
        "url('/assets/images/portfolio/kulikov.jpg')",
        'Kulikov Aleksey'),
      new ItemSite('/resources/styledcollective/board_main.html',
        "url('/assets/images/portfolio/moodboard.jpg')",
        'Styledcollective'),
      new ItemSite('/resources/okivoki/index.html',
        "url('/assets/images/portfolio/okivoki.jpg')",
        'Okivoki'),
      new ItemSite('http://yapdomik.ru/',
        "url('/assets/images/portfolio/yapdomik.jpg')",
        'Yapdomik'),
      new ItemSite('',
        "url('/assets/images/portfolio/portfolio.jpg')",
        'Portfolio')
    ];

    WP: Array<ItemSite> = [
      new ItemSite('https://do-to-be.org/',
        "url('/assets/images/portfolio/blog.jpg')",
        'Do-to-Be'),
      new ItemSite('http://www.thebears.ru',
        "url('/assets/images/portfolio/thebears.jpg')",
        'The Bears')
    ];

    HC: Array<ItemSite> = [
      new ItemSite('/resources/awolo/index.html',
        "url('/assets/images/portfolio/awolo.work.jpg')",
        'Awolo Digital'),
      new ItemSite('https://fastforms.co',
        "url('/assets/images/portfolio/fastforms.jpg')",
        'Fastforms'),
      new ItemSite('https://do-to-be.org/',
        "url('/assets/images/portfolio/blog.jpg')",
        'Do-to-Be'),
      new ItemSite('http://www.devotecindustries.com',
        "url('/assets/images/portfolio/devotech.jpg')",
        'Devotecindustries'),
      new ItemSite('http://www.dharmaspring.com',
        "url('/assets/images/portfolio/dharmaspring.jpg')",
        'Dharmaspring'),
      new ItemSite('/resources/megakam/index.html',
        "url('/assets/images/portfolio/megacam.jpg')",
        'MegaCam'),
      new ItemSite('/resources/kulikov/index.html',
        "url('/assets/images/portfolio/kulikov.jpg')",
        'Kulikov Aleksey'),
      new ItemSite('http://yapdomik.ru/',
        "url('/assets/images/portfolio/yapdomik.jpg')",
        'Yapdomik')
    ];



    NG: Array<ItemSite> = [
        new ItemSite('',
        "url('/assets/images/portfolio/portfolio.jpg')",
        'Portfolio')
    ];

    constructor() { }

  ngOnInit() {
  }

}
