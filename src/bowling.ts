export const rollAndScore = (frame: string): number => {
    return frame
        .split("")
        .map(Number)
        .reduce((a, b) => a + b)
};

export default {
    rollAndScore
};