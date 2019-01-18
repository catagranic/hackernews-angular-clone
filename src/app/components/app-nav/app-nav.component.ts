import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  styleUrls: ['app-nav.component.scss'],
  template: `
    <nav class="app-nav">
      <ul>
        <li><a routerLink="news" routerLinkActive="active">news</a></li>
        <li><a routerLink="comments" routerLinkActive="active">comments</a></li>
      </ul>
    </nav>
  `
})
export class AppNavComponent {
  constructor() {}
}