import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// containers
import { AppComponent } from './containers/app/app.component';
import { CommentComponent } from './containers/comments/comment.component';

// components
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { TitleComponent } from './components/app-title/title.component'; 

// providers 
import { RegisterActiveRouteService } from './shared/services/register-active-route.service';
import { AppService } from './shared/services/app.service';
import { NewsComponent } from './containers/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent,
    TitleComponent,
    CommentComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AppService,
    RegisterActiveRouteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
