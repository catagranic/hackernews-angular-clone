import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-icon',
  styleUrls: ['./icon.component.scss'],
  template: `
    <i class="material-icons">
      {{ icon }}
    </i>
  `,
})
export class IconComponent {
  @Input() icon: string;
}