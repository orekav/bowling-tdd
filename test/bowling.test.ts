import { Frame } from "../src/bowling";

describe("Frame scores without strike nor spares", () => {

  it("should scores 0 points when rolls two balls and knocks 0 pins in each roll", () => {
    const aFrame = new Frame("00");
    const score = aFrame.getScore();
    expect(score).toBe(0);
  });

  it("should scores 8 points when rolls two balls and knocks 4 pins in each roll", () => {
    const aFrame = new Frame("44");
    const score = aFrame.getScore();
    expect(score).toBe(8);
  });

  it("should scores 2 points when rolls two balls and knocks 1 pins in each roll", () => {
    const aFrame = new Frame("11");
    const score = aFrame.getScore();
    expect(score).toBe(2);
  });

});

describe("Frame scores with spares", () => {
  let spareFrame: Frame;

  beforeEach(() => {
    spareFrame = new Frame("5/");
  });

  it("should scores 10 points when does an spare and next roll knocks 0 pins", () => {
    const nextShot = 0;
    const score = spareFrame.getScore(nextShot);
    expect(score).toBe(10);
  });

  it("should scores 11 points when does an spare and next roll knocks 1 pins", () => {
    const nextShot = 1;
    const score = spareFrame.getScore(nextShot);
    expect(score).toBe(11);
  });

});