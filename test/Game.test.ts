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

});