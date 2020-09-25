import Game from "../src/Game";

describe("Game scores", () => {

  it("should score 0 points when misses every roll", () => {
    const aGame = new Game("--|--|--|--|--|--|--|--|--|--||-");
    const score = aGame.getScore();
    expect(score).toBe(0);
  });

});