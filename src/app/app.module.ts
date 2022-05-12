import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AssociationsComponent } from './associations/associations.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleHubComponent } from './article-hub/article-hub.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AssociationsComponent,
    ArticlesComponent,
    ArticleHubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
