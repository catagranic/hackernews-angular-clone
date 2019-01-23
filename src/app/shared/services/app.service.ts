import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {

  baseUrl: string = 'https://hacker-news.firebaseio.com/v0'

  constructor(
    private http: HttpClient
  ) {}

  getTopStories(first: number, last: number): Observable<any> {
    return this.http
      .get<[any]>(`${this.baseUrl}/topstories.json`).pipe(
        map(response => response.slice(first, last))
      )
  }

  getSingleItem(id: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/item/${id}.json`).pipe(
        map((response: Response) => response)
      )
  }

  getUser(name: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/user/${name}.json`).pipe(
        map((response: Response) => response)
      )
  }

}