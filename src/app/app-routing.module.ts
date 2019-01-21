import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentComponent } from './containers/comments/comment.component';
import { NewsComponent } from './containers/news/news.component';
import { UserComponent } from './containers/user/user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: NewsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'comments/:id', component: CommentComponent},
  { path: 'user/:name', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
