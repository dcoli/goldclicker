import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { GoldClickerComponent } from './goldclicker.component';
import { ListingComponent } from './listing/listing.component';

@NgModule({
  declarations: [
    GoldClickerComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [GoldClickerComponent]
})
export class GoldClickerModule { }
