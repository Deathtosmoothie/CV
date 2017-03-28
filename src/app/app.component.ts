import { Component } from '@angular/core';


import { HomeComponent } from './home/home.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { HeaderComponent } from './header/header.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lan: string = 'ru';

  changeLanEn() {
    this.lan = 'en';

  }
  changeLanRu() {
    this.lan = 'ru';

  }
}
