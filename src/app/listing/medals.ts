import { Listing } from './listing';

    export class Medal {
        public label = this.constructor.name;
        public isSelected = false;
    }

    export class Bronze extends Medal {
        public weight = 1;

        public sortStrategy( a:Listing, b:Listing ) {
            return (a,b) => 
                a.numBronze < b.numBronze? 1: a.numBronze > b.numBronze? -1: 
                a.scoreHash < b.scoreHash? 1: a.scoreHash > b.scoreHash? -1: 0;
        }
    }

    export class Silver extends Medal {
        public weight = 3;

        public sortStrategy( a:Listing, b:Listing ) {
            return (a,b) => 
                a.numSilver < b.numSilver? 1: a.numSilver > b.numSilver? -1: 
                a.scoreHash < b.scoreHash? 1: a.scoreHash > b.scoreHash? -1: 0;
        }
    }

    export class Gold extends Medal {

        public weight = 6;

        public sortStrategy( a:Listing, b:Listing ) {
            return (a,b) => 
                a.numGold < b.numGold? 1: a.numGold > b.numGold? -1: 
                a.scoreHash < b.scoreHash? 1: a.scoreHash > b.scoreHash? -1: 0;
        }
    }

    export class Total extends Medal {

        public sortStrategy( a:Listing, b:Listing ) {
            return (a,b) => 
                a.numTotal < b.numTotal? 1: a.numTotal > b.numTotal? -1: 
                a.scoreHash < b.scoreHash? 1: a.scoreHash > b.scoreHash? -1: 0;
        }
    }
