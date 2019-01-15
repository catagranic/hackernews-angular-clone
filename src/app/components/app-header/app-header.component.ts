import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['app-header.component.scss'],
  template: `
    <div class="app-header">
      <div class="wrapper">
        <div>
          <img src="assets/img/y18.gif">
          <h3>Hacker news</h3>
          <app-nav></app-nav>
        </div>
      </div>
    </div>
  `
})
export class AppHeaderComponent {
  constructor() {}
}