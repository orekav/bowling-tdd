import Frame from "../src/Frame";

describe("Frame scores without strike nor spares", () => {

  it("should score 0 points when rolls two balls and knocks 0 pins in each roll", () => {
    const aFrame = new Frame("--");
    const score = aFrame.getScore();
    expect(score).toBe(0);
  });

  it("should score 8 points when rolls two balls and knocks 4 pins in each roll", () => {
    const aFrame = new Frame("44");
    const score = aFrame.getScore();
    expect(score).toBe(8);
  });

  it("should score 2 points when rolls two balls and knocks 1 pins in each roll", () => {
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

  it("should score 10 points when does an spare and next roll knocks 0 pins", () => {
    const nextShot = 0;
    const score = spareFrame.getScore(nextShot);
    expect(score).toBe(10);
  });

  it("should score 11 points when does an spare and next roll knocks 1 pins", () => {
    const nextShot = 1;
    const score = spareFrame.getScore(nextShot);
    expect(score).toBe(11);
  });

});

describe("Frame scores with strike", () => {
  let spareFrame: Frame;

  beforeEach(() => {
    spareFrame = new Frame("x");
  });

  it("should score 10 points when does an Strike followed by two rolls that knocks 0 pins each one", () => {
    const score = spareFrame.getScore(0, 0);
    expect(score).toBe(10);
  });

  it("should score 20 points when does an Strike followed by two rolls that knocks 5 pins each one", () => {
    const score = spareFrame.getScore(5, 5);
    expect(score).toBe(20);
  });

});