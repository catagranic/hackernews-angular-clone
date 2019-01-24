//our root app component
import { Component, Input, EventEmitter, Output, OnChanges } from '@angular/core'

@Component({
  selector: 'app-title',
  styleUrls: ['./title.component.scss'],
  template: `
    <h3>{{title}}</h3> 
  `,
})
export class TitleComponent implements OnChanges {

  @Input() title: string;
  @Output() titleChanged: EventEmitter<string> = new EventEmitter<string>();
  
  ngOnChanges() {
    this.titleChanged.emit(this.title);
  } 
  
}