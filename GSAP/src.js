const tweenMax = require("gsap");
const timeline = new tweenMax.TimelineMax({
  repeat: 1,
  yoyo: true,
  repeat: Infinity
});

const firstBall = document.querySelector(".ball");
const ballscount = 3000;
function createBalls() {
  const balls = [];
  for (let i = 0; i < ballscount - 1; i++) {
    const ball = firstBall.cloneNode();
    document.body.appendChild(ball);
  }
  return balls;
}

createBalls();
timeline.to(".ball", 1, { x: 500 });
