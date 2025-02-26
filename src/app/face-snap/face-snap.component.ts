import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap', // le nom <balise> correspondant
  standalone: true,  // veut dire qu'on a pas besoin de faire partie d'un module  pour pouvoir l'utiliser
  imports: [], // Pour importer les dependances de notre component
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  title!: string;   //le point d'exclamation pour faire une promesse d'initialisation sinon typescript montrera des erreurs
  description!: string;
  createdAt!: Date;
  likes!: number;
  imageUrl!: string;

  // maintenant on doit respecter notre promesse en les initialisant
  ngOnInit(): void { // c'est comme un constructeur mais ca ne les pas, c'est ici qu'on initialise les proprietes de notre component
    this.imageUrl = 'https://cdn.pixabay.com/photo/2017/11/19/07/30/girl-2961959_1280.jpg'
    this.title = 'Archivald';
    this.description = 'Ma meilleure photo';
    this.createdAt = new Date();
    this.likes = 5;   
  }
  // methodes pour incrementer le nombre de likes
  onAddLikes(): void {
    this.likes++
  }
}      

