"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let balloons = [];

setup();

update();

function setup() {
    for (let i = 0; i < 200; i++) {
        let balloon = {
            x: width / 2,
            y: height / 2,
            size: 10,
            hue: Utils.randomNumber(0, 360)
        };
        balloons[i] = balloon;
    }
    console.log(balloons);
}

function update(){
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < balloons.length; i++) {
        let balloon = balloons[i];
        balloon.x += Utils.randomNumber(0, 2);
        balloon.y += Utils.randomNumber(0, 2);
        drawBalloon(balloon);
    }

    requestAnimationFrame(update);
}

drawBalloon();

function drawBalloon(balloon){
    let x = Utils.randomNumber(0, width);
    let balloonMargin = 80;
    let y = Utils.randomNumber(height - balloonMargin, height);
    context.fillStyle = Utils.hsl(balloon.hue, 100, 50);
    Utils.fillEllipse(x, y, 10, 20);
    context.lineWidth = 2;
    Utils.drawLine(x, y + 20, x, y + 50);
}