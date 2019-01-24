import { Component, OnInit } from '@angular/core';
import { RegisterActiveRouteService } from '../../shared/services/register-active-route.service';

@Component({
  selector: 'app-header',
  styleUrls: ['app-header.component.scss'],
  template: `
    <div class="app-header">
      <div class="wrapper">
        <div>
          <img src="assets/img/y18.gif">
          <h3><a routerLink="news">Hacker news</a></h3>
          <app-nav></app-nav>
          <div *ngIf="title" class="title">
            <h3>{{ this.title }}</h3>
            <app-icon
              [icon]="icon">
            </app-icon>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AppHeaderComponent implements OnInit {
  title: string;
  icon: string;

  constructor(
    private routeData: RegisterActiveRouteService
  ) {}

  ngOnInit() {
    this.routeData.routeData$.subscribe(data => {
      this.title = data ? data.title : null;
      this.changeIcon(this.title);
    });
  }

  changeIcon(event) {
    switch (event) {
      case 'comments':
        this.icon = 'chat_bubble';
        break;
      case 'news':
        this.icon = 'computer';
        break;
      case 'user':
        this.icon = 'face';
        break;
      default:
        this.icon = 'computer';
    }
  }

}