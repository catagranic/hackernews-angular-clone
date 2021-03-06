import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentComponent } from './containers/comments/comment.component';
import { NewsComponent } from './containers/news/news.component';
import { UserComponent } from './containers/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'news', pathMatch: 'full' },
  { path: 'news', component: NewsComponent, data: { title: 'news' } },
  { path: 'comments/:id', component: CommentComponent, data: { title: 'comments' } },
  { path: 'user/:name', component: UserComponent, data: { title: 'user' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
