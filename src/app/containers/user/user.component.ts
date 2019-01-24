import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../../shared/services/app.service';
import { User } from '../../shared/models/user.interface';

@Component({
  selector: 'user',
  styleUrls: ['user.component.scss'],
  template: `
    <div *ngIf="user" class="user">
      <p><span>user:</span> <span>{{ user.id }}</span></p>
      <p><span>created:</span> <span class="date">{{ user.created }}</span></p>
      <p><span>karma:</span> <span>{{ user.karma }}</span></p>
      <p><span>about:</span> <span>{{ user.about }}</span></p>
    </div>
  `
})
export class UserComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    this.appService
      .getSingleItem(this.route.snapshot.paramMap.get('name'))
      .subscribe(data => this.user = data)
  }

}