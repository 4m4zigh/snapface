export class FaceSnap {

  location?: string; // Propriété optionnelle

// Constructeur de la classe
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

  setLocation(location: string): void {
    this.location = location;
  }


}
