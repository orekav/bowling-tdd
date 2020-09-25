export default class Frame {
    private rollsScore: number;
    private isSpare: boolean = false;
    private isStrike: boolean = false;

    constructor(rollsString: string) {
        const rolls = rollsString
            .toLocaleUpperCase()
            .split("");

        if (rolls.includes("/")) {
            this.isSpare = true;
            this.rollsScore = 10;
        } else if (rolls.includes("X")) {
            this.isStrike = true;
            this.rollsScore = 10;
        } else {
            this.rollsScore = rolls
                .map(aChar => aChar === "-" ? 0 : Number(aChar))
                .reduce((a, b) => a + b);
        }
    }

    public getScore(nextFirstShot?: number, nextSecondShot?: number) {
        return this.rollsScore
            + (this.isSpare ? nextFirstShot : 0)
            + (this.isStrike ? nextFirstShot + nextSecondShot : 0);
    }
}