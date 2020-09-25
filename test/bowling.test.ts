import * as bowling from "../src/bowling";

describe("Frame scores without strike nor spares", () => {
  it("should scored 0 points when rolls two balls and knocks 0 pins in each roll", () => {
    const score = bowling.rollAndScore("00");
    expect(score).toBe(0);
  });
});