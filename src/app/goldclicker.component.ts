import { Component, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { Listing } from './listing/listing'
import * as Medals from './listing/medals';

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
  gold: Medals.Gold = new Medals.Gold();
  silver: Medals.Silver = new Medals.Silver();
  bronze: Medals.Bronze = new Medals.Bronze();
  total: Medals.Total = new Medals.Total();

  constructor(public elementRef: ElementRef, private http: Http) {
    let native = this.elementRef.nativeElement;
    this.sortOrder = native.getAttribute('sort');
    this.title = native.getAttribute('title') || 'Medal Count';
    if(this.diagnostic) console.log(this.sortOrder);
    let diagnostic = native.getAttribute('diagnostic') || false;
  }

  ngOnInit() {
    // get the data
    let capitalizedMedal = this.sortOrder.charAt(0).toUpperCase() + this.sortOrder.substr(1);
    console.log(Medals[capitalizedMedal]);
    // let sortMedal = Object.create(Model[capitalizedMedal].prototype);

    this.http.get('./assets/mockhttp.json').toPromise()
      .then( ( payload ) => payload.json() )
      .then( ( rawlistings ) => this.parse( rawlistings ))
      // .then( () => this.sortArray( sortMedal ) )
      .catch( ( e ) => this.handleError(e) );
  }

  private isActive( medal: string ) {
    // this.listings.sort(metal.sortStrategy(a,b));
    if(this.diagnostic) console.log(medal.toLowerCase());
    return this.sortOrder === medal.toLowerCase();
  }

  private sortArray( metal: Medals.Medal ) {
    console.log(metal);
    // this.listings.sort( metal.sortStrategy() ); 
    this.sortOrder = metal.label.toLowerCase();  
    // for( let l in this.listings ) { this.listings[l].rank = parseInt(l) + 1 };  
  }

  private parse( rawlistings: any[] ) {
    for( let el of rawlistings ) {
      let listing = new Listing( el );
      this.listings.push( listing );
      if( this.diagnostic ) console.log( listing );
    }
  }

  private handleError( error ) {
    console.error( error );
  }
}
