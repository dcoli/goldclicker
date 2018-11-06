import { Gold } from "./gold";
import { Silver } from "./silver";
import { Bronze } from "./bronze";

export class Listing {
    public code: string;
    public numGold: number;
    public numSilver: number;
    public numBronze: number;
    public scoreHash: number;
    public numTotal: number;
    
    constructor( obj: any ) {
        this.code = obj.code;
        this.numGold = obj.gold;
        this.numSilver = obj.silver;
        this.numBronze = obj.bronze;
        this.scoreHash = this.hashScores();
        this.numTotal = this.sumMedals();
    }
    
    hashScores() {
        let weightedGold = new Gold().weight * this.numGold;
        let weightedSilver = new Silver().weight * this.numSilver;
        let weightedBronze = new Bronze().weight * this.numBronze;
        return weightedGold + weightedSilver + weightedBronze;
    }

    sumMedals(): number {
        return this.numGold + this.numSilver + this.numBronze;
    }
}
