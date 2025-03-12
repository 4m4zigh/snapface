import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() : void {

    this.faceSnaps = [
      new FaceSnap(
        'Ayoub',
        'Roi',
        'https://picsum.photos/100',
        new Date(),
        10
      ),
      new FaceSnap(
        'Yema',
        'Reine',
        'https://picsum.photos/200',
        new Date(),
        100
      ),
      new FaceSnap(
        'Baba',
        'Empereur',
        'https://picsum.photos/300',
        new Date(),
        100
      )
    ];
    this.faceSnaps[2].setLocation('Ain Zohra');
  }

}
