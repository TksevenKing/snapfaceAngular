import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,   // dans angular 19 standalone is already true dy default so not needed
  imports: [ FaceSnapComponent ], // Pour utiliser un component il faut l'ajouter a imports dans app.components
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  mySnap!: FaceSnap; // ajouter l'attribut ici du component <app-face-snap [faceSnap]='mysnap'>
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    // initialisatin des instances de FaceSnap
      this.mySnap = new FaceSnap(
        'https://cdn.pixabay.com/photo/2022/09/16/13/07/generated-7458584_640.jpg',
        'African Queen',
        'Africa has the more beautifull girl in the world !',
        new Date(),
        5
      );
      this.myOtherSnap = new FaceSnap(
        'https://cdn.pixabay.com/photo/2017/11/19/07/30/girl-2961959_1280.jpg',
        'Archivald',
        'Ma meilleure photo',
        new Date(),
        5
      );
      this.myLastSnap = new FaceSnap(
        'https://cdn.pixabay.com/photo/2024/05/31/10/48/woman-8800324_640.jpg',
        'Astrid',
        'Another Type of beauty',
        new Date(),
        10
      )
  }

}
