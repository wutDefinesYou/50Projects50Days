import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { interval, take } from 'rxjs'
import { RangeMappingPipe } from './pipes/range-mapping.pipe'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RangeMappingPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular'
  load: number = 0

  ngOnInit(): void {
    interval(50)
      .pipe(take(101))
      .subscribe((num: number) => (this.load = num))
  }
}
