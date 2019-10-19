const anime = require('animejs');

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

anime({
  targets: '.ball',
  translateX: 500,
  duration: 1000,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutQuad'
});
