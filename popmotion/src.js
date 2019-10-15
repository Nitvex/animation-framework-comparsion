const tween = require("popmotion").tween;
const styler = require("popmotion").styler;

const firstBall = document.querySelector(".ball");
const ballscount = 3000;

function createBalls() {
  const balls = [];
  for (let i = 0; i < ballscount - 1; i++) {
    const ball = firstBall.cloneNode();
    balls.push(styler(ball));
    document.body.appendChild(ball);
  }
  return balls;
}
const balls = [styler(firstBall), ...createBalls()];

tween({
  from: { x: 0 },
  to: { x: 500 },
  flip: Infinity,
  duration: 1000
}).start(v => {
  for (let i = 0; i < balls.length - 1; i++) {
    balls[i].set(v);
  }
});
