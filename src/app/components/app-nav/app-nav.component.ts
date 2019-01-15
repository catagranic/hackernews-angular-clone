import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  styleUrls: ['app-nav.component.scss'],
  template: `
    <nav class="app-nav">
      <ul>
        <li><a routerLink="new" routerLinkActive="active">new</a></li>
        <li><a routerLink="comments" routerLinkActive="active">comments</a></li>
        <li><a routerLink="ask" routerLinkActive="active">ask</a></li>
        <li><a routerLink="show" routerLinkActive="active">show</a></li>
        <li><a routerLink="jobs" routerLinkActive="active">jobs</a></li>
        <li><a routerLink="submit" routerLinkActive="active">submit</a></li>
      </ul>
    </nav>
  `
})
export class AppNavComponent {
  constructor() {}
}