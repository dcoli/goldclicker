import { Component, OnInit } from '@angular/core';
import { Listing } from './listing';

@Component({
  selector: 'listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  private listing: Listing;

  constructor() { }

  ngOnInit() {
  }

}
