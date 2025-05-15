import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-face-snap', // le nom <balise> correspondant
  standalone: true,  // veut dire qu'on a pas besoin de faire partie d'un module  pour pouvoir l'utiliser
  imports: [ NgStyle, NgClass], // Si je veux utiliser d'autres components dans celui la c'est ici que je les ajoute
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap; // ici avec @input() on creer  l'atrribut faceSnap qui va etre passer par le component parent
  // title!: string;   
  // description!: string; // au lieu d'ecrire tout ca ici 
  // createdAt!: Date; // on veut pouvoir preciseer leur valeur pour chaque nouvel du component 
  // likes!: number;  // permettre la reutilisabilite d'ou on creer un type personnaliser dans le dossier "models" qui va  
  // imageUrl!: string; // contenir leur initialiser dans le constructeur de la classe
  likesButtonText!: string; //le point d'exclamation pour faire une promesse d'initialisation sinon typescript montrera des erreurs
  hasLiked!: boolean

  // maintenant on doit respecter notre promesse en les initialisant
  ngOnInit(): void { // c'est comme un constructeur mais ca ne les pas, c'est ici qu'on initialise les proprietes de notre component
    this.likesButtonText = "Oh snap !"  
    this.hasLiked = false
  }
  // methodes pour incrementer le nombre de likes
  onAddLikes(): void {
    this.faceSnap.addLikes()
  }
  onAddLikesOnce(): void {
    if(this.hasLiked){
      this.faceSnap.removeLikes()
      this.likesButtonText = 'Oh snap !'
      this.hasLiked = false
    }else{
      this.faceSnap.addLikes()
      this.likesButtonText = 'Oops ! un Snap!'
      this.hasLiked = true
    }
  }
}      

