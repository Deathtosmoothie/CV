import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ItemsPortfolioComponent } from './portfolio/items-portfolio/items-portfolio.component';
import { ItemsPortfolioPullComponent } from './portfolio/items-portfolio/items-portfolio-pull/items-portfolio-pull.component';
import { CalloutComponent } from './callout/callout.component';
import { TechnologiesComponent } from './technologies/technologies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreloaderComponent,
    HeaderComponent,
    PortfolioComponent,
    ItemsPortfolioComponent,
    ItemsPortfolioPullComponent,
    CalloutComponent,
    TechnologiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
