import { Component, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { Listing } from './listing/listing'
// import 'rxjs/add/operator/toPromise';

@Component({
  selector: '#goldclicker',
  templateUrl: './goldclicker.component.html',
  styleUrls: ['./goldclicker.component.css']
})

export class GoldClickerComponent {
  listings: Listing[] = [];

  constructor(public elementRef: ElementRef, private http: Http) {
    let native = this.elementRef.nativeElement;
    let sort = native.getAttribute('sort') || 'gold';
    let heading = native.getAttribute('heading') || 'Medal Count';
  }

  ngOnInit() {
    // get the data
    this.http.get('./assets/mockhttp.json').toPromise()
      .then((payload)=>payload.json())
      .then((listings)=>this.parse(listings));
  }

  private parse( listings: any[] ) {
    for( let el of listings ) {
      let listing = new Listing( el );
      this.listings.push(listing);
      console.log(listing);
      // console.log(listing.scoreHash);
    }
  }

}
