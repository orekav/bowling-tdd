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
    private _rolls: Shot[];
    private rollsScore: number;
    private isSpare: boolean = false;
    private isStrike: boolean = false;

    constructor(rollsString: string) {
        this._rolls = rollsString
            .toLocaleUpperCase()
            .split("") as Shot[];

        this.isSpare = this._rolls.includes("/");
        this.isStrike = this._rolls.includes("X");
        this.rollsScore = this.isSpare || this.isStrike ?
            10 :
            this._rolls
                .map(shotToNumber)
                .reduce((a, b) => a + b);
    }

    get rolls(): Shot[] {
        return this._rolls;
    }

    public getScore(nextFirstShot?: Shot, nextSecondShot?: Shot) {
        return this.rollsScore
            + (this.isSpare ? shotToNumber(nextFirstShot) : 0)
            + (this.isStrike ?
                ([nextFirstShot, nextSecondShot].includes("/") ?
                    shotToNumber("/") : shotToNumber(nextFirstShot) + shotToNumber(nextSecondShot)
                )
                : 0);
    }
}