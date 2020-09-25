export type Shot = number | "/" | "X" | "-";

const shotToNumber = (aShot: Shot) => {
    switch (aShot) {
        case "-": return 0;
        case "/": return 10;
        case "X": return 10;
        default: return Number(aShot);
    }
};

export default class Frame {
    private rollsScore: number;
    private isSpare: boolean = false;
    private isStrike: boolean = false;

    constructor(rollsString: string) {
        const rolls: Shot[] = rollsString
            .toLocaleUpperCase()
            .split("") as Shot[];

        if (rolls.includes("/")) {
            this.isSpare = true;
            this.rollsScore = 10;
        } else if (rolls.includes("X")) {
            this.isStrike = true;
            this.rollsScore = 10;
        } else {
            this.rollsScore = rolls
                .map(shotToNumber)
                .reduce((a, b) => a + b);
        }
    }

    public getScore(nextFirstShot?: Shot, nextSecondShot?: Shot) {
        return this.rollsScore
            + (this.isSpare ? shotToNumber(nextFirstShot) : 0)
            + (this.isStrike ? shotToNumber(nextFirstShot) + shotToNumber(nextSecondShot) : 0);
    }
}