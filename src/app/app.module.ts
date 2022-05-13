import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AssociationsComponent } from './associations/associations.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleHubComponent } from './article-hub/article-hub.component';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {TabMenuModule} from 'primeng/tabmenu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {CheckboxModule} from 'primeng/checkbox';
import {DialogModule} from 'primeng/dialog';
import {CarouselModule} from 'primeng/carousel';
import {TimelineModule} from 'primeng/timeline';
import {FieldsetModule} from 'primeng/fieldset';
import {DropdownModule} from 'primeng/dropdown';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {InputNumberModule} from 'primeng/inputnumber';


import {MenuModule} from 'primeng/menu';
import { CardModule, } from 'primeng/card';
import {ImageModule} from 'primeng/image';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ImageModule,
    CardModule,
    MenuModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextModule,
    InputTextareaModule,
    MenubarModule,
    ButtonModule,
    ToolbarModule,
    TabMenuModule,
    PanelMenuModule,
    TieredMenuModule,
    CheckboxModule,
    DialogModule,
    CarouselModule,
    TimelineModule,
    FieldsetModule,
    DropdownModule,
    ScrollPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
