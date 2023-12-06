import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular';
  joke: string = '...';
  private http: HttpClient = inject(HttpClient);

  ngOnInit(): void {
    this.getNewJoke();
  }

  getNewJoke(): void {
    const headers = new HttpHeaders({ Accept: 'application/json' });

    this.http
      .get('https://icanhazdadjoke.com', {
        headers: headers,
      })
      .subscribe((response: any) => (this.joke = response?.joke));
  }
}
