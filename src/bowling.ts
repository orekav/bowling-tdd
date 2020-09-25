export class Frame {
    private rolls: number[];

    constructor(rolls: string) {
        this.rolls = rolls
            .split("")
            .map(Number);
    }

    public getScore() {
        return this.rolls.reduce((a, b) => a + b);
    }
}

export default {
    Frame,
};