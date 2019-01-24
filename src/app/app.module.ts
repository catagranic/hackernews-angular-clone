import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';

// containers
import { AppComponent } from './containers/app/app.component';
import { CommentComponent } from './containers/comments/comment.component';
import { UserComponent } from './containers/user/user.component';
import { NewsComponent } from './containers/news/news.component';

// components
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { IconComponent } from './components/app-icon/icon.component'; 

// providers 
import { RegisterActiveRouteService } from './shared/services/register-active-route.service';
import { AppService } from './shared/services/app.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent,
    IconComponent,
    CommentComponent,
    NewsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [
    AppService,
    RegisterActiveRouteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
