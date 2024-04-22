import { Component, DestroyRef, OnInit, inject } from '@angular/core'
import { fromEvent, tap } from 'rxjs'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  pressed: boolean = false
  key: string | undefined
  keycode: number | undefined
  code: string | undefined
  private destroyRef = inject(DestroyRef)

  ngOnInit(): void {
    fromEvent<KeyboardEvent>(document, 'keyup')
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(() => (this.pressed = true))
      )
      .subscribe({
        next: ({ key, keyCode, code }) =>
          ([this.key, this.keycode, this.code] = [key, keyCode, code]),
      })
  }
}
