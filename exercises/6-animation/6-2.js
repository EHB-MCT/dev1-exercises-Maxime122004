"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let xPos = 50;
let yPos = 50;
let radius = 50;
let frameCount = 0;
let goWidth = true;
let goHeight = true;
let speed = 5;

update();

function update(){
    frameCount++;
    if(xPos >= width - radius){
        goWidth = false;
    }
    else if(xPos <= radius){
        goWidth = true;
    }

    if(yPos >= height - radius){
        goHeight = false;
    }
    else if(yPos <= radius){
        goHeight = true;
    }
    drawBall();
    requestAnimationFrame(update);

    if(goWidth == true){
        xPos += speed;
    } else{
        xPos -= speed;
    }

    if(goHeight == true){
        yPos += speed;
    } else{
        yPos -= speed;
    }
}

function drawBall(){
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "red";
    Utils.fillCircle(xPos, yPos, radius, radius);
}