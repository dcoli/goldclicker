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

  //the constructor grabs attributes of the page element this app is attached to.
  constructor(public elementRef: ElementRef, private http: Http) {
    let native = this.elementRef.nativeElement;
    this.sortOrder = native.getAttribute('sort');
    this.title = native.getAttribute('title') || 'Medal Count';
    if(this.diagnostic) console.log(this.sortOrder);
    let diagnostic = native.getAttribute('diagnostic') || false;
  }

  ngOnInit() {
    //taking the sort attribute in the parent tag and converting it to a class name
    let capitalizedMedal = this.sortOrder.charAt(0).toUpperCase() + this.sortOrder.substr(1);
    let sortMedal = Object.create((Medals)[capitalizedMedal].prototype);    
    sortMedal.constructor.apply(sortMedal);

    this.http.get('./assets/mockhttp.json').toPromise()
      .then( ( payload ) => payload.json() )
      .then( ( rawlistings ) => this.parse( rawlistings ))
      .then( ( ) => this.sortArray( sortMedal ) )
      .catch( ( e ) => this.handleError(e) );
  }

  //used to apply the "active" class and corresponding effects to the column that has been selected for sorting
  private isActive( medal: string ) {
    if(this.diagnostic) console.log(medal.toLowerCase());
    return this.sortOrder === medal.toLowerCase();
  }

  //The Medal class has a sort strategy customized for each type of Medal (or "Total").
  private sortArray( metal: Medals.Medal ) {
    if(this.diagnostic) console.log(metal.sortStrategy);
    this.listings.sort( (a,b) => metal.sortStrategy(a,b) ); 
    this.sortOrder = metal.label.toLowerCase();  
    for( let l in this.listings ) { this.listings[l].rank = parseInt(l) + 1 };  
  }

  //converting raw json feed to Listing
  private parse( rawlistings: any[] ): Listing[] {
    for( let el of rawlistings ) {
      let listing = new Listing( el );
      this.listings.push( listing );
      if( this.diagnostic ) console.log( listing );
    }
    return this.listings;
  }

  private handleError( error ) {
    console.error( error );
  }
}
