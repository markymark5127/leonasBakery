import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    { src: '/assets/cakesAI.jpg', alt: 'First Slide' },
    { src: '/assets/ballsAI.jpg', alt: 'Second Slide' },
    { src: '/assets/meats.jpg', alt: 'Third Slide' }
  ];
}
