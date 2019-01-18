import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from 'src/app/shared/services/app.service';
import { topStory } from 'src/app/shared/models/top-story.interface';

import { Comment } from '@angular/compiler';

@Component({
  selector: 'comment',
  styleUrls: ['comment.component.scss'],
  template: `
    <div class="comments">
      <div *ngIf="story">
        <h2>{{ story.title }}</h2>
        <p>Score: {{ story.score }}</p>
        <p>{{ story.url }}</p>
      </div>
      <div
        class="comment-block"
        [class.padding-bottom]="!comment.active"
        *ngFor="let comment of comments; index as i">
        <div class="top-comment">
          <span *ngIf="comment.active" class="caret">&#9650;</span>
          {{ comment.by }} 
          <span class="comment-date">{{ comment.time }}</span>
          [<span (click)="toggleComment(i)">
            <span *ngIf="!comment.active">+</span>
            <span *ngIf="comment.active">-</span>
          </span>]
        </div>
        <p
          *ngIf="comment.active"
          class="comment-text">{{ comment.text }}</p>
      </div>
    </div>
  `
})
export class CommentComponent implements OnInit {

  story: topStory;
  comments: Comment[] = [];

  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.appService
      .getSingleItem(+this.route.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.story = data;
        this.story.kids.forEach(id => {
          this.appService
            .getComment(id)
            .subscribe(data => this.comments.push({ active: true, ...data }))
        })
      })
  }

  toggleComment(index) {
    this.comments[index].active = !this.comments[index].active;
  }

}