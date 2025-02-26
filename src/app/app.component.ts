import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FaceSnapComponent ], // Pour utiliser un component il faut l'ajouter a imports dans app.components
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
