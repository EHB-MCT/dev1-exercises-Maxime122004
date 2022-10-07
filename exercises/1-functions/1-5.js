"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawSunset();

function drawSunset(){

    //oranje background//
    context.beginPath();
    context.fillStyle = "orange";
    context.rect(50, 50, 300, 300);
    context.fill();

    //gele cirkel//
    context.beginPath();
    context.fillStyle = "yellow";
    context.arc(200, 225, 100, 0, 360);
    context.fill();

    //blauw vlak//
    context.beginPath();
    context.fillStyle = "blue";
    context.rect(50, 250, 300, 100);
    context.fill();
}