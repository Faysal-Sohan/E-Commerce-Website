import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  slides = [
    { image: "../../../../assets/images/slider-images/01.jpg" },
    { image: "../../../../assets/images/slider-images/02.jpg"  },
    { image: "../../../../assets/images/slider-images/03.jpg"  },
    { image: "../../../../assets/images/slider-images/04.jpg"  },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
