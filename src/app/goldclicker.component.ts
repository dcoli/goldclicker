import { Component, ElementRef } from '@angular/core';

@Component({
  selector: '#goldclicker',
  templateUrl: './goldclicker.component.html',
  styleUrls: ['./goldclicker.component.css']
})

export class GoldClickerComponent {
  title = 'goldclicker';

  constructor(public elementRef: ElementRef) {
    let native = this.elementRef.nativeElement;
    let sort = native.getAttribute('sort') || 'gold';
    let heading = native.getAttribute('heading') || 'Medal Count';
  }

}
