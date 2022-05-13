import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleHubComponent } from './article-hub/article-hub.component';
import { AssociationsComponent } from './associations/associations.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"Articles", component: ArticleHubComponent},
  {path:"Associations",component:AssociationsComponent},
  {path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
