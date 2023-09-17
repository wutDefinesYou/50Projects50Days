import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  rotated: boolean = false

  onOpen(): void {
    this.rotated = true
  }

  onClose(): void {
    this.rotated = false
  }
}
