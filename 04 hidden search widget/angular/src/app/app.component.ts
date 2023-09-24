import { Component, ElementRef, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular'
  active: boolean = false
  inputValue: string = ''
  @ViewChild('Input') input: ElementRef | undefined

  toggle(): void {
    this.active = !this.active
    if (this.active && this.input) this.input.nativeElement.focus()
    this.inputValue = ''
  }
}
