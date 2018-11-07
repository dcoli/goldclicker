import { Component, OnInit, Input } from '@angular/core';
import { Listing } from './listing';

@Component({
  selector: 'tr [listing-component]',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  @Input() listing: Listing;

  constructor() { }

  ngOnInit() {
  }

}
