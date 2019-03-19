import { PingPongBall } from "./../src/ping-pong.js"

describe('Ping Pong Ball', function() {

  it('should test whether a ping pong ball is created with the correct size', function() {
    var ppb = new PingPongBall(5);
    expect(ppb.radius).toEqual(5);
  });
});
