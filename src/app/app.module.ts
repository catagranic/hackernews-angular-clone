import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// containers
import { AppComponent } from './containers/app/app.component';
import { CommentComponent } from './containers/comments/comment.component';
import { UserComponent } from './containers/user/user.component';

// components
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';

// providers 
import { AppService } from './shared/services/app.service';
import { NewsComponent } from './containers/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent,
    CommentComponent,
    NewsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
