import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular'
  circles: number[] = [1, 2, 3, 4]
  activeSteps: number = 0

  onPrevClick(): void {
    if (this.activeSteps > 0) this.activeSteps--
  }

  onNextClick(): void {
    if (this.activeSteps < this.circles.length - 1) this.activeSteps++
  }

  get progressBarSize(): string {
    return this.activeSteps / (this.circles.length - 1) * 100 + '%'
  }
}
