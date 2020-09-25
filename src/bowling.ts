export class Frame {
    private rollsScore: number;
    private isSpare: boolean = false;

    constructor(rollsString: string) {
        const rolls = rollsString.split("");

        if (rolls.includes("/")) {
            this.isSpare = true;
            this.rollsScore = 10;
        }
        else {
            this.rollsScore = rolls
                .map(Number)
                .reduce((a, b) => a + b);
        }
    }

    public getScore(nextShot?: number) {
        return this.rollsScore + (this.isSpare ? nextShot : 0);
    }
}

export default {
    Frame,
};