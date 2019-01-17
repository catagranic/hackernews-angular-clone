import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './containers/app/app.component';
import { CommentComponent } from './containers/comments/comment.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppComponent },
  { path: 'comments/:id', component: CommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
