import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ActiveRouteData {
  title: string
}

@Injectable()
export class RegisterActiveRouteService {
  activeRouteData;

  routeData$: Subject<ActiveRouteData> = new Subject<ActiveRouteData>();

  registerActiveRouteData(data) {
    this.routeData$.next(data);
    console.log(this.routeData$)
  }
}
