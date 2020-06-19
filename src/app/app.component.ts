import {Component, OnInit} from '@angular/core';
import * as SVG from 'svg.js';
import {FontData} from 'svg.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'svgAngular';

  ngOnInit(): void {
  // const width = 450;
  // const height = 300;
  //
  // const draw = SVG('pong').size(width, height);
  // const background = draw.rect(width, height).fill('#E3E8E6');
  //
  // const line = draw.line(width / 2, 0, width / 2, height);
  // line.stroke({ width: 5, color: '#fff', dasharray: '5,5' });
  //
  // const paddleWidth = 20;
  // const paddleHeight = 100;
  //
  // // create and position left paddle
  // const paddleLeft = draw.rect(paddleWidth, paddleHeight);
  // paddleLeft.x(0).cy(height / 2).fill('#00ff99');
  //
  // // create and position right paddle
  // const paddleRight = paddleLeft.clone();
  // paddleRight.x(width - paddleWidth).fill('#ff0066');
  //
  // // define ball size
  // const ballSize = 20;
  //
  // // create ball
  // const ball = draw.circle(ballSize);
  // ball.center(width / 2, height / 2).fill('#7f7f7f');
  //
  // // define initial player score
  // let playerLeft = 0;
  // let playerRight = 0;
  //
  // // create text for the score, set font properties
  // const scoreLeft = draw.text(playerLeft + '').font({
  //   size: 32,
  //   family: 'Menlo, sans-serif',
  //   anchor: 'end',
  //   fill: '#fff'
  // } as FontData).move(width / 2 - 10, 10);
  //
  // const scoreRight = scoreLeft.clone()
  //   .text(playerRight + '')
  //   .font({anchor : 'start'})
  //   .x(width / 2 + 10);
  //
  // // random velocity for the ball at start
  // let vx = Math.random() * 500 - 250;
  // let vy = Math.random() * 500 - 250;
  //
  // // update is called on every animation step
  // function update(dt) {
  //   // move the ball by its velocity
  //   ball.dmove(vx * dt, vy * dt);
  //
  //   // get position of ball
  //   const cx = ball.cx();
  //   const cy = ball.cy();
  //
  //   // check if we hit top/bottom borders
  //   if ((vy < 0 && cy <= 0) || (vy > 0 && cy >= height)) {
  //     vy = -vy;
  //   }
  //
  //   // check if we hit left/right borders
  //   if ((vx < 0 && cx <= 0) || (vx > 0 && cx >= width)) {
  //     vx = -vx;
  //   }
  //
  //   const paddleLeftY = paddleLeft.y();
  //   const paddleRightY = paddleRight.y();
  //
  //   // check if we hit the paddle
  //   if ((vx < 0 && cx <= paddleWidth && cy > paddleLeftY && cy < paddleLeftY + paddleHeight) ||
  //     (vx > 0 && cx >= width - paddleWidth && cy > paddleRightY && cy < paddleRightY + paddleHeight)) {
  //
  //     // depending on where the ball hit we adjust y velocity
  //     // for more realistic control we would need a bit more math here
  //     // just keep it simple
  //     vy = (cy - ((vx < 0 ? paddleLeftY : paddleRightY) + paddleHeight / 2)) * 7; // magic factor
  //
  //     // make the ball faster on hit
  //     vx = -vx * 1.05;
  //   }
  //
  //   // check if we hit left/right borders
  //   if ((vx < 0 && cx <= 0) || (vx > 0 && cx >= width)) {
  //     // when x-velocity is negative, its a point for player 2, else player 1
  //     if (vx < 0) { ++playerRight; } else { ++playerLeft; }
  //
  //     vx = -vx;
  //
  //     scoreLeft.text(playerLeft + '');
  //     scoreRight.text(playerRight + '');
  //   }
  // }
  //
  // let lastTime;
  // let animFrame;
  //
  // function callback(ms) {
  //   // we get passed a timestamp in milliseconds
  //   // we use it to determine how much time has passed since the last call
  //
  //   if (lastTime) {
  //     update((ms - lastTime) / 1000); // call update and pass delta time in seconds
  //   }
  //
  //   lastTime = ms;
  //   animFrame = requestAnimationFrame(callback);
  // }
  //
  // callback(0);
  }
}
