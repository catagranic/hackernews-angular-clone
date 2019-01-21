import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AppService } from '../../shared/services/app.service';
import { topStory } from '../../shared/models/top-story.interface';

@Component({
  selector: 'news',
  styleUrls: ['./news.component.scss'],
  template: `
    <div>
      <div class="top-story" *ngFor="let story of topStories; index as i;">
        <a [href]="story.url" target="_blank">
          {{ story.index + 1 }}. <span class="caret">&#9650;</span> <span class="title">{{ story.title }}</span>
        </a>
        <p class="extra">{{ story.score }} points by <a routerLink="/user/{{ story.by }}">{{ story.by }}</a>&nbsp;<a routerLink="/comments/{{ story.id }}">(comments)</a></p>
      </div>
      <h3 (click)="reload()">More</h3>
    </div>
  `
})
export class NewsComponent implements OnInit {

  topStories: topStory[] = [];
  firstStory: number = 0;
  currentPage: number = 0;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.appService
      .getTopStories()
      .subscribe((data: number[]) => {
        // let topStories = data.slice(this.firstStory, this.firstStory += 30)
        data.forEach((item, i) => {
          this.appService
            .getSingleItem(item)
            .subscribe((data) => this.topStories.push({ index: i, ...data }))
        })
      })
    
  }

  reload() {
    console.log(this.currentPage)
    this.router.navigate(['/news'], { queryParams: { p: this.currentPage += 1 } });
    this.topStories = [];
    this.getNews();
  }

}
