import { Listing } from './listing';

export class Medal {
    public isSelected = false;
    public label = "Medal";

    // see below this function for how it will appear when applied to one of the medal subclasses
    public sortStrategy( a:Listing, b:Listing ): number {
        return a['num'+this.label] < b['num'+this.label]? 1: a['num'+this.label] > b['num'+this.label]? -1: 
            a.scoreHash < b.scoreHash? 1: a.scoreHash > b.scoreHash? -1: 0;
    }

    // public sortStrategy( a:Listing, b:Listing ) {
    //     return (a,b) => 
    //         a.numSilver < b.numSilver? 1: a.numSilver > b.numSilver? -1: 
    //         a.scoreHash < b.scoreHash? 1: a.scoreHash > b.scoreHash? -1: 0;
    // }


}

export class Bronze extends Medal {
    public label = "Bronze";
    public weight = 1;
}

export class Silver extends Medal {
    public label = "Silver";
    public weight = 1000;
}

export class Gold extends Medal {
    public label = "Gold";
    public weight = 1000000;
}

export class Total extends Medal {
    public label = "Total";
}
