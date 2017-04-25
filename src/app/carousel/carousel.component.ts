import { Component, OnInit, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import {CarouselItemComponent} from '../carousel-item/carousel-item.component';

@Component({
  selector: 'carousel',
  template: `<div class="carousel slide">
  <div class="carousel-inner" role="listbox">
    <ng-content></ng-content>
  </div>
</div>  
  `,
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterContentInit, OnInit {

  @Input() delay: number = 500;
  @ContentChildren(CarouselItemComponent) carouselItemsList: QueryList<CarouselItemComponent>;

  constructor() { }

  ngAfterContentInit() {
    let carouselItems = this.carouselItemsList.toArray();
    let count: number = 0;
    let max = carouselItems.length;
    setInterval(() => {
      let i = count % max;
      carouselItems.forEach((item) => item.isActive = false);
      carouselItems[i].isActive = true;
      count += 1;
    }, this.delay)
  }
  
  ngOnInit() {
  }

}
