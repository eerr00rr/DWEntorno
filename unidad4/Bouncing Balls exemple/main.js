// set up canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random RGB color value

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {

   constructor(x, y, velX, velY, color, size, timeToLive) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
      this.timeToLive = new Date().getSeconds() + timeToLive;
   }

   draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
   }

   update() {
      if ((this.x + this.size) >= width) {
         this.velX = -(this.velX);
      }

      if ((this.x - this.size) <= 0) {
         this.velX = -(this.velX);
      }

      if ((this.y + this.size) >= height) {
         this.velY = -(this.velY);
      }

      if ((this.y - this.size) <= 0) {
         this.velY = -(this.velY);
      }

      this.x += this.velX;
      this.y += this.velY;
   }

   collisionDetect() {
      for (const ball of balls) {
         if (!(this === ball)) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + ball.size) {
               ball.velX = -(ball.velX);
               ball.velY = -(ball.velY);
               this.velX = -(this.velX);
               this.velY = -(this.velY);

               const index = balls.indexOf(ball);
               balls.splice(index, 1);
            }
         }
      }
   }

}

const balls = [];

while (balls.length < 25) {
   const size = random(10,20);
   const ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size,width - size),  //position x
      random(0 + size,height - size), //position y
      random(-70,70),                   //velocity x
      random(-70,70),                   //velocity y
      randomRGB(),                    // color random
      size,                           // size
      random(10, 30)                  // ttl between 10 and 30 seconds
   );

  balls.push(ball);
}

function loop() {
   ctx.fillStyle = '#000000';
   ctx.clearRect(0, 0,  width, height);
   ctx.fillRect(0, 0,  width, height);


   for (const ball of balls) {
      ball.draw();
      ball.update();
      ball.collisionDetect();
      if (ball.timeToLive === new Date().getSeconds()) {
         const index = balls.indexOf(ball);
         balls.splice(index, 1);
      }
   }
   if (balls.length === 1) {
      alert('Juego terminado');
      return;
   }
   requestAnimationFrame(loop);
}

loop();
