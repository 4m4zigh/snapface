import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {NgStyle, UpperCasePipe} from '@angular/common';


@Component({
  selector: 'app-face-snap',
  imports: [
    UpperCasePipe,
    NgStyle
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  buttonText!: string;
  userAlreadySnapped!: boolean;


  ngOnInit(): void {

    this.buttonText = "Oh Snap!"
    this.userAlreadySnapped = false;
  }

  onSnap() : void {
    if (this.userAlreadySnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap(): void {
    this.faceSnap.removeSnap();
    this.buttonText = "Oh Snap!";
    this.userAlreadySnapped = false;
  }
  snap() : void {
    this.faceSnap.addSnap();
    this.buttonText = "Oops Unsnap!";
    this.userAlreadySnapped = true;
  }
}
