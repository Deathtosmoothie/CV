import { Component, OnInit, Input } from '@angular/core';
import {ItemTech} from "./item-tech";

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

    @Input() lan: string;

  constructor() { }

  ngOnInit() {
  }

  items:Array<ItemTech> = [
      new ItemTech('/assets/images/technologies/html5_logo.png','HTML5'),
      new ItemTech('/assets/images/technologies/css3_logo.png','CSS3'),
      new ItemTech('/assets/images/technologies/bootstrap_logo.jpg','Bootstrap'),
      new ItemTech('/assets/images/technologies/sass_logo.png','SASS'),
      new ItemTech('/assets/images/technologies/wordpress_logo.png','Wordpress'),
      new ItemTech('/assets/images/technologies/js_logo.png','JavaScript'),
      new ItemTech('/assets/images/technologies/jquery_logo.png','jQuery'),
      new ItemTech('/assets/images/technologies/gulp_logo.jpg','Gulp'),
      new ItemTech('/assets/images/technologies/git_logo.png','Git'),
      new ItemTech('/assets/images/technologies/angular2_logo.png','Angular'),
      new ItemTech('/assets/images/technologies/photoshop_logo.jpg','Photoshop'),
      new ItemTech('/assets/images/technologies/illustrator_logo.jpg','Illustrator'),
  ];

}

