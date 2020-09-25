import Frame, { Shot } from "./Frame";

export default class Game {
    private frames: { frame: Frame, rolls: string }[];
    private lastShots: Shot[];

    constructor(rolls: string) {
        const [rollFrameStrings, lastShots] = rolls.split("||");
        this.lastShots = lastShots.split("") as Shot[];
        this.frames = rollFrameStrings
            .split("|")
            .map(aRollFrame => {
                const aFrame = new Frame(aRollFrame);
                return { frame: aFrame, rolls: aRollFrame };
            });
    }

    public getScore() {
        return this.frames
            .map((aFrame, index, frames) => {
                const [nextFirstFrame, nextSecondFrame] = frames.slice(index + 1);
                const rollsConcat =
                    (nextFirstFrame?.rolls || "")
                    + (nextSecondFrame?.rolls || "")
                    + this.lastShots.join("")
                    + "-";

                const [nextFirstShot, nextSecondShot] = rollsConcat.split("") as Shot[];

                return aFrame.frame.getScore(
                    nextFirstShot,
                    nextSecondShot
                );
            })
            .reduce((a, b) => a + b);
    }
};