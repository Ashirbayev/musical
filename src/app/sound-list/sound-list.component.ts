import { Component, ViewChild, ElementRef } from '@angular/core';

interface Sound {
  id: number;
  name: string;
  filename: string;
}

@Component({
  selector: 'app-sound-list',
  templateUrl: './sound-list.component.html',
  styleUrls: ['./sound-list.component.css']
})
export class SoundListComponent {
  displayedColumns: string[] = ['id', 'name', 'filename'];
  sounds: Sound[] = [
    { id: 1, name: 'Rain', filename: 'https://www.soundjay.com/nature/rain-01.mp3' },
    { id: 2, name: 'Applause', filename: 'https://www.soundjay.com/human/applause-8.mp3' },
    { id: 3, name: 'Jazz', filename: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' }
  ];

  selectedSound: Sound | null = null;

  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef<HTMLAudioElement>;

  selectSound(sound: Sound) {
    this.selectedSound = sound;
    if (this.audioPlayer) {
      this.audioPlayer.nativeElement.load();
      this.audioPlayer.nativeElement.play();
    }
  }
}
