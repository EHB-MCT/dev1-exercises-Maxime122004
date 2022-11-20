"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = move;

/**
 * 
 * @param {MouseEvent} eventData 
 */

function move(eventData){
    let x = eventData.pageX; 
    let y = eventData.pageY;
    context.fillStyle = "white";
    context.fillRect(0,0, width, height);
    context.strokeStyle = "red";
    Utils.drawLine(0,y, width, y+1);
    context.strokeStyle = "red";
    Utils.drawLine(x,0, x+1, height);
    context.lineWidth = 5;
}