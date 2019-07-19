import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { NewsControlComponent } from './news-control/news-control.component';
import { NewsSearchComponent } from './news-control/news-search/news-search.component';
import { NewsFilterComponent } from './news-control/news-filter/news-filter.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { FooterComponent } from './footer/footer.component';
import { HideDirective } from './shared/hide.directive';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    NewsControlComponent,
    NewsSearchComponent,
    NewsFilterComponent,
    UpdateDataComponent,
    FooterComponent,
    HideDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
