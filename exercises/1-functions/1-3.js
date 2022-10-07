"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawSquare();

function drawSquare(){

    //rood outline, links bovenaan//
    context.beginPath();
    context.strokeStyle = "red";
    context.fillStyle = "white";
    context.rect(50, 50, 150, 150);
    context.fill();
    context.stroke();
    
    //rood outline, rechts onderaan//
    context.beginPath();
    context.strokeStyle = "red";
    context.fillStyle = "white";
    context.rect(200, 200, 150, 150);
    context.fill();
    context.stroke();
    
    //zwarte vierkant, midden//
    context.beginPath();
    context.fillStyle = "black";
    context.rect(125, 125, 150, 150);
    context.fill();

    //rood outline, rechts bovenaan//
    context.beginPath();
    context.strokeStyle = "red";
    context.fillStyle = "white";
    context.rect(275, 75, 50, 50);
    context.fill();
    context.stroke();

    //rood outline, links onderaan//
    context.beginPath();
    context.strokeStyle = "red";
    context.fillStyle = "white";
    context.rect(75, 275, 50, 50);
    context.fill();
    context.stroke();
    
    //zwarte vierkant, rechts bovenaan//
    context.beginPath();
    context.fillStyle = "black";
    context.rect(325, 50, 25, 25);
    context.fill();
    
    //zwarte vierkant, rechts bovenaan//
    context.beginPath();
    context.fillStyle = "black";
    context.rect(50, 325, 25, 25);
    context.fill();
}