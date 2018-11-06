import { Medal } from './medal'
import { Listing } from './listing';

export class Silver extends Medal {
    public weight = 3;

    public sortStrategy( a:Listing, b:Listing ) {
        return (a,b) => 
            a.numSilver < b.numSilver? 1: a.numSilver > b.numSilver? -1: 
            a.scoreHash < b.scoreHash? 1: a.scoreHash > b.scoreHash? -1: 0;
    }
}
