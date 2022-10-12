"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawSquares(50, 300);
drawSquares(75, 250);
drawSquares(100, 200);
drawSquares(125, 150);
drawSquares(150, 100);
drawSquares(175, 50);
    
drawSquares();

function drawSquares(pos, size){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = "rgb(" + r + ", " + g + "," + b + ")";
    context.fillStyle = color;
    context.fillRect(pos, pos, size, size);
}