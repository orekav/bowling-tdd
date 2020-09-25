import Game from "../src/Game";

describe("Game scores", () => {

  it("should score 0 points when misses every roll", () => {
    const aGame = new Game("--|--|--|--|--|--|--|--|--|--||-");
    const score = aGame.getScore();
    expect(score).toBe(0);
  });

  it("should score 10 points when it does a spare and misses the remaining rolls", () => {
    const aGame = new Game("-/|--|--|--|--|--|--|--|--|--||-");
    const score = aGame.getScore();
    expect(score).toBe(10);
  });

  it("should score 20 points when it does a spare and misses the remaining rolls", () => {
    const aGame = new Game("-/|5-|--|--|--|--|--|--|--|--||-");
    const score = aGame.getScore();
    expect(score).toBe(20);
  });

  it("should score 300 points when it does a strike in every throw", () => {
    const aGame = new Game("X|X|X|X|X|X|X|X|X|X||XX");
    const score = aGame.getScore();
    expect(score).toBe(300);
  });

  it("should score 150 points when it does a strike in every throw and the extra roll is a 5", () => {
    const aGame = new Game("5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5");
    const score = aGame.getScore();
    expect(score).toBe(150);
  });

  it("should score 90 points when it does '9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||'", () => {
    const aGame = new Game("9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||");
    const score = aGame.getScore();
    expect(score).toBe(90);
  });

  it("should score 167 points when it does 'X|7/|9-|X|-8|8/|-6|X|X|X||81'", () => {
    const aGame = new Game("X|7/|9-|X|-8|8/|-6|X|X|X||81");
    const score = aGame.getScore();
    expect(score).toBe(167);
  });

});