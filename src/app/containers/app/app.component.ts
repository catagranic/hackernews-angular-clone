import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div>
      <app-header></app-header>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
