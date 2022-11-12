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

export function rgb(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgb = "rgb(" + r + ", " + g + ", " + b + " )";
    return rgb;
}

export function fillAndStrokeCircle(x, y, radius){
    context.beginPath();
    context.arc(x, y, radius, 0, 360);
    context.fill();
    context.stroke();
}

export function fillCircle(x, y, radius){
    context.beginPath();
    context.ellipse(x, y, radius, radius, 0, 0, 360);
    context.fill();
}


export function calculateDistance(x1, y1, x2, y2){
    return Math.hypot(x2 - x1, y2 - y1);
}