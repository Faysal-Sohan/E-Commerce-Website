import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  faAngleRight = faAngleRight;
  constructor() { }

  ngOnInit(): void {
  }

}
