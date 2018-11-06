import { Component, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { Listing } from './listing/listing'
import { Gold } from './listing/gold';
import { Silver } from './listing/silver';
import { Bronze } from './listing/bronze';
import { Total } from './listing/total';
import { Medal } from './listing/medal';

@Component({
  selector: '#goldclicker',
  templateUrl: './goldclicker.component.html',
  styleUrls: ['./goldclicker.component.css']
})

export class GoldClickerComponent {
  listings: Listing[] = [];
  title: string = 'Medal Count';
  sortOrder: string = 'gold';
  diagnostic: boolean = false;
  gold: Gold = new Gold();
  silver: Silver = new Silver();
  bronze: Bronze = new Bronze();
  total: Total = new Total();

  constructor(public elementRef: ElementRef, private http: Http) {
    let native = this.elementRef.nativeElement;
    this.sortOrder = native.getAttribute('sort');
    this.title = native.getAttribute('title') || 'Medal Count';
    console.log(this.sortOrder);
    let diagnostic = native.getAttribute('diagnostic') || false;
  }

  ngOnInit() {
    // get the data
    this.http.get('./assets/mockhttp.json').toPromise()
      .then( ( payload ) => payload.json() )
      .then( ( listings ) => this.parse( listings ))
      .catch( ( e ) => this.handleError(e) );
  }

  private isActive( medal: string ) {
    // this.listings.sort(metal.sortStrategy(a,b));
    console.log(medal.toLowerCase());
    return this.sortOrder === medal.toLowerCase();
  }

  private parse( listings: any[] ) {
    for( let el of listings ) {
      let listing = new Listing( el );
      this.listings.push( listing );
      if( this.diagnostic ) console.log( listing );
    }
  }

  private handleError( error ) {
    console.error( error );
  }
}
