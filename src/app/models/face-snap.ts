export class FaceSnap {

  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public createdAt: Date,
              public snaps: number ) {

  }
  addSnap(): void {
    this.snaps += 1;
  }

  removeSnap(): void {
    this.snaps -= 1;
  }

}
