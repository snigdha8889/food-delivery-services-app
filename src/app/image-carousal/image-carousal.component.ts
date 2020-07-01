import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carousal',
  templateUrl: './image-carousal.component.html',
  styleUrls: ['./image-carousal.component.css']
})

export class ImageCarousalComponent implements OnInit {
  images: String[];
  constructor() {
    this.images = ['/assets/images/carousal/slide1.jpg',
      '/assets/images/carousal/slide2.jpg',
      '/assets/images/carousal/slide3.jpg'];

  }

  ngOnInit() {
  }

}
