import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AnimatedBoxDirective } from './animated-box.directive'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AnimatedBoxDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular'
  arr: unknown[] = new Array(13)
}
