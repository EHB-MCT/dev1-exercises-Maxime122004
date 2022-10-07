"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawSquare();

function drawSquare(){
    
    context.beginPath();
    context.fillStyle = "#add9e6";
    context.strokeStyle = "black";
    context.rect(50, 50, 350, 350);
    context.fill();
    context.stroke();

    context.beginPath();
    context.fillStyle = "#add9e6";
    context.strokeStyle = "black";
    context.rect(50, 50, 300, 300);
    context.fill();
    context.stroke();

    context.beginPath();
    context.fillStyle = "#add9e6";
    context.strokeStyle = "black";
    context.rect(100, 50, 250, 250);
    context.fill();
    context.stroke();
    
    context.beginPath();
    context.fillStyle = "#add9e6";
    context.strokeStyle = "black";
    context.rect(150, 100, 200, 200);
    context.fill();
    context.stroke();

    context.beginPath();
    context.fillStyle = "#add9e6";
    context.strokeStyle = "black";
    context.rect(150, 150, 150, 150);
    context.fill();
    context.stroke();
}