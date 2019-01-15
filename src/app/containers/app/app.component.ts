import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div>
      <app-header></app-header>
      <div *ngFor="let story of topStories">
        {{ story }}
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {

  topStories: number[];

  constructor(
    private appService: AppService
  ) {}

  ngOnInit() {
    this.appService
      .getTopStories()
      .subscribe((data: number[]) => {
        // this.topStories = data;
        this.topStories = data.slice(0, 30)
      })

    this.appService
      .getSingleItem(18912656)
      .subscribe((data) => console.log(data))
  }

}
