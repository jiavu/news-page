import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { NewsControlComponent } from './news-control/news-control.component';
import { NewsSearchComponent } from './news-control/news-search/news-search.component';
import { NewsFilterComponent } from "./news-control/news-filter/news-filter.component";

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    NewsControlComponent,
    NewsSearchComponent,
    NewsFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };
