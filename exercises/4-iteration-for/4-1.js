"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawLines();

function drawLines(){
    let step = 25;
    let amount = width / step;
    let amountHeight = height / step;
    context.strokeStyle = "white";
    context.lineWidth = 3;
    for(let i = 0; i < amount; i++){
        Utils.drawLine(step * i, 0, width - (step * i), height);
    }
    for(let i= 0; i < amountHeight; i++){
        Utils.drawLine(0, step * i, width,  height - (step * i));
    }
}
