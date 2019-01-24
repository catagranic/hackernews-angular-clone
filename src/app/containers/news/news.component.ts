import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../../shared/services/app.service';
import { topStory } from '../../shared/models/top-story.interface';
import { RegisterActiveRouteService } from '../../shared/services/register-active-route.service';

@Component({
  selector: 'news',
  styleUrls: ['./news.component.scss'],
  template: `
    <div
      class="top-story"
      *ngFor="let story of topStories; index as i">
      <a [href]="story.url" target="_blank">
        {{ i + 1 }}. <span class="caret">&#9650;</span> <span class="title">{{ story.title }}</span>
      </a>
      <p class="extra">{{ story.score }} points by {{ story.by }} <a routerLink="/comments/{{ story.id }}">(comments)</a></p>
    </div>
  `
})
export class NewsComponent implements OnInit {

  topStories: topStory[] = [];

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private activeRouteService: RegisterActiveRouteService
  ) {}

  ngOnInit() {
    this.activeRouteService.registerActiveRouteData(this.route.routeConfig.path);

    this.appService
      .getTopStories()
      .subscribe((data: number[]) => {
        let topStories = data.slice(0, 30)
        topStories.forEach(item => {
          this.appService
            .getSingleItem(item)
            .subscribe((data) => this.topStories.push(data))
          })
        })
  }

}
