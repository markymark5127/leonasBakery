import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  images = [
    '/assets/cakesAI.jpg',
    '/assets/ballsAILowMin.jpg',
    '/assets/meatsAI.jpg'
  ];
  currentIndex: number = 0;
  private intervalId: any;

  ngOnInit() {
    this.startAutoSlide(); // Start the auto-slide on component initialization
  }

  ngOnDestroy() {
    this.stopAutoSlide(); // Clear the interval when the component is destroyed
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length; // Increment index and loop back to 0
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length; // Decrement index and loop
  }

  startAutoSlide() {
    // Automatically change slide every 3 seconds
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clear the interval if it exists
      this.intervalId = null;
    }
  }
}
