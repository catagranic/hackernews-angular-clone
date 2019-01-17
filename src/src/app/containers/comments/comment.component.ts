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
      <h2>{{ story?.title }}</h2>
      <p>Score: {{ story?.score }}</p>
      <p>{{ story?.url }}</p>
      <div *ngFor="let comment of comments">
        <div class="comment-wrap">
          <div class="comment-block">
            <p class="comment-text">{{ comment.text }}</p>
            <div class="bottom-comment">
              <div class="comment-author">{{ comment.by }}</div>
              <div class="comment-date">{{ comment.time }}</div>
            </div>
          </div>
        </div>
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
            .subscribe(data => this.comments.push(data))
        })
      })
  }

}