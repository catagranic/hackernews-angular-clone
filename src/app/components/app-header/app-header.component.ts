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
          <app-title
            *ngIf="title"
            class="title"
            [title]="title">
            {{ title }}
          </app-title>
        </div>
      </div>
    </div>
  `
})
export class AppHeaderComponent implements OnInit {
  title: string;

  constructor(
    private routeData: RegisterActiveRouteService
  ) {}

  ngOnInit() {
    this.routeData.routeData$.subscribe(data => {
      this.title = data ? data.title : null;
    });
  }
}