import { Medal } from './medal';
import { Listing } from './listing';

export class Gold extends Medal {

    public weight = 6;

    public sortStrategy( a:Listing, b:Listing ) {
        return (a,b) => 
            a.numGold < b.numGold? 1: a.numGold > b.numGold? -1: 
            a.scoreHash < b.scoreHash? 1: a.scoreHash > b.scoreHash? -1: 0;
    }
}
