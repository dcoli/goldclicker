import { Medal } from "./medal";
import { Listing } from "./listing";

export class Total extends Medal {

    public sortStrategy( a:Listing, b:Listing ) {
        return (a,b) => 
            a.numTotal < b.numTotal? 1: a.numTotal > b.numTotal? -1: 
            a.scoreHash < b.scoreHash? 1: a.scoreHash > b.scoreHash? -1: 0;
    }
}
