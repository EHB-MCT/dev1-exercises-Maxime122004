"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let xPos = 50;
let yPos = 50;
let radius = 50;
let frameCount = 0;

update();

function update(){
    frameCount++;
    xPos = xPos + 10;
    yPos = yPos + 10;
    if(yPos > height){
        yPos = yPos - 10;
    }
    if(xPos > width){
        xPos = xPos - 10;
    }
    drawBall();
    requestAnimationFrame(update);
}


function drawBall(){
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "red";
    Utils.fillCircle(xPos, yPos, radius, radius);
    if(xPos == width){
        context.rotate((Math.random()*360) * Math.PI / 180);
    }
}