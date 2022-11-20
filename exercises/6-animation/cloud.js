"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let xPos = Math.floor(Math.random()* width);
let yPos = Math.floor(Math.random() * height);
let radius = 75;

drawCloud();

function drawCloud(){
    
    context.fillStyle = "blue";
    Utils.fillCircle(xPos, yPos+90, radius);
    Utils.fillCircle(xPos+90, yPos+90, radius);
    Utils.fillCircle(xPos+180, yPos+90, radius);
    Utils.fillCircle(xPos+45, yPos, radius);
    Utils.fillCircle(xPos+135, yPos, radius);

}