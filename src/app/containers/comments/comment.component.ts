import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'comment',
  styleUrls: ['comment.component.scss'],
  template: `
    <div>
      <app-header></app-header>
      Comments
    </div>
  `
})
export class CommentComponent {

  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) {}

  // getComment() {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.appService
  //     .getComment(id)
  //     .subscribe(data => console.log(data))
  // }

}