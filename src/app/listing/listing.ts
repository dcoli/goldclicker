import * as Medals from './medals';

export class Listing {
    public code: string;
    public rank: number;
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
        let weightedGold = new Medals.Gold().weight * this.numGold;
        let weightedSilver = new Medals.Silver().weight * this.numSilver;
        let weightedBronze = new Medals.Bronze().weight * this.numBronze;
        return weightedGold + weightedSilver + weightedBronze;
    }

    sumMedals(): number {
        return this.numGold + this.numSilver + this.numBronze;
    }
}
