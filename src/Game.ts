import Frame, { Shot } from "./Frame";

export default class Game {
    private frames: Frame[];
    private lastShots: string;

    constructor(rolls: string) {
        const [rollFrameStrings, lastShots] = rolls.split("||");
        this.lastShots = lastShots;
        this.frames = rollFrameStrings
            .split("|")
            .map(aRollFrame => new Frame(aRollFrame));
    }

    private getFrameScore = (aFrame: Frame, index: number, frames: Frame[]) => {
        const [nextFirstFrame, nextSecondFrame] = frames.slice(index + 1, 10);
        const rollsConcat =
            (nextFirstFrame?.rolls.join("") || "")
            + (nextSecondFrame?.rolls.join("") || "")
            + this.lastShots
            + "-";

        const [nextFirstShot, nextSecondShot] = rollsConcat.split("") as Shot[];

        return aFrame.getScore(
            nextFirstShot,
            nextSecondShot
        );

    }

    public getScore() {
        return this.frames
            .map(this.getFrameScore)
            .reduce((a, b) => a + b);
    }
};