import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonListComponent } from './amazon-list/amazon-list.component';
import { AppComponent } from './app.component';
import { AmazonDetailsComponent } from './amazon-details/amazon-details.component';

const routes: Routes = [
  {path:'',component:AmazonListComponent},
  { path:'amazon-details/:id',component:AmazonDetailsComponent },
  { path:'**',component: AppComponent}
 ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
