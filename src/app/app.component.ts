import { Component } from '@angular/core';

import {CarouselComponent} from './carousel/carousel.component';

@Component({
  selector: 'app-root',
  template: `
<carousel [delay]="2000">
  <carousel-item>
    <img src="https://unsplash.it/200?image=0" alt="">
  </carousel-item>
  <carousel-item>
    <img src="https://unsplash.it/200?image=100" alt="">
  </carousel-item>
  <carousel-item>
    <img src="https://unsplash.it/200?image=200" alt="">
  </carousel-item>
</carousel>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}