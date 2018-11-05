import { Gold } from "./gold";
import { Silver } from "./silver";
import { Bronze } from "./bronze";

const GOLDWEIGHT = 1000000;
const SILVERWEIGHT = 1000;

export class Listing {
    public code: string;
    public gold: number;
    public silver: number;
    public bronze: number;
    public scoreHash: number;
    public totalMedals: number;
    
    constructor( obj: any ) {
        this.code = obj.code;
        this.gold = obj.gold;
        this.silver = obj.silver;
        this.bronze = obj.bronze;
        this.scoreHash = this.hashScores();
        this.totalMedals = this.sumMedals();
    }
    
    hashScores() {
        let weightedGold = GOLDWEIGHT * this.gold;
        let weightedSilver = SILVERWEIGHT * this.silver;
        let weightedBronze = this.bronze;
        return weightedGold + weightedSilver + weightedBronze;
    }

    sumMedals(): number {
        return this.gold + this.silver + this.bronze;
    }
}
