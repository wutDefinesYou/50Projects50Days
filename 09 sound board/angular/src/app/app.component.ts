import { Component, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular';
  animals = animals;

  @ViewChildren('audio') audios!: QueryList<{
    nativeElement: HTMLAudioElement;
  }>;

  makeSound(audio: HTMLAudioElement): void {
    this.audios.toArray().forEach(({ nativeElement }) => {
      nativeElement.pause();
      nativeElement.currentTime = 0;
    });

    audio.play();
  }
}

const animals = [
  {
    name: 'Sheep',
    url: 'https://www.google.com/logos/fnbx/animal_sounds/sheep.mp3',
  },
  {
    name: 'Tiger',
    url: 'https://www.google.com/logos/fnbx/animal_sounds/tiger.mp3',
  },
  {
    name: 'Pig',
    url: 'https://www.google.com/logos/fnbx/animal_sounds/pig.mp3',
  },
  {
    name: 'Frog',
    url: 'https://www.google.com/logos/fnbx/animal_sounds/frog.mp3',
  },
  {
    name: 'Dog',
    url: 'https://www.google.com/logos/fnbx/animal_sounds/dog.mp3',
  },
  {
    name: 'Rat',
    url: 'https://www.google.com/logos/fnbx/animal_sounds/rat.mp3',
  },
];
