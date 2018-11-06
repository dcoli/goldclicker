import { Medal } from './medal'
import { Listing } from './listing';

export class Bronze extends Medal {
    public weight = 1;

    public sortStrategy( a:Listing, b:Listing ) {
        return (a,b) => 
            a.numBronze < b.numBronze? 1: a.numBronze > b.numBronze? -1: 
            a.scoreHash < b.scoreHash? 1: a.scoreHash > b.scoreHash? -1: 0;
    }
}
