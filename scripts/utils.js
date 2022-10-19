"use strict";
import context from "./context.js";


/**
 * Draws a line between 2 points
 * @param {Number} x1 X coordinate of the starting point
 * @param {Number} y1 Y coordinate of the starting point
 * @param {Number} x2 X coordinate of the end point
 * @param {Number} y2 Y coordinate of the end point
 */

export function drawLine(x1, y1, x2, y2){
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();

}

export function rgb(r,g,b){
    let rgb = "rgb(" + r + ", " + g + ", " + b + " )";
    return rgb;
}