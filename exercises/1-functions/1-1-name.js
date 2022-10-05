"use strict";


drawName();

function drawName(){

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

    //M//
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "red";
    context.moveTo(50, 500);
    context.lineTo(50, 100);
    context.lineTo(200, 250);
    context.lineTo(350, 100);
    context.lineTo(350, 500);
    context.stroke();

    //a//
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "blue";
    context.moveTo(500, 500);
    context.lineTo(500, 400);
    context.lineTo(400, 400);
    context.lineTo(400, 500);
    context.lineTo(525, 500);   
    context.stroke();
    
    //x//
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "green";
    context.moveTo(575, 500);
    context.lineTo(650, 400);
    context.stroke();
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "green";
    context.moveTo(650, 500);
    context.lineTo(575, 400);
    context.stroke();

    //i//
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle= "purple";
    context.moveTo(700, 500);
    context.lineTo(700, 425);
    context.stroke();
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "purple";
    context.moveTo(700, 405);
    context.lineTo(700, 400);
    context.stroke();

    //m//
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "orange";
    context.moveTo(750, 500);
    context.lineTo(750, 400);
    context.lineTo(800, 450);
    context.lineTo(850, 400);
    context.lineTo(850, 500);
    context.stroke();

    //e//
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "pink";
    context.moveTo(900, 500)
    context.lineTo(900, 400);
    context.lineTo(950, 400)
    context.stroke();
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "pink";
    context.moveTo(900, 500)
    context.lineTo(950, 500);
    context.stroke();
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "pink";
    context.moveTo(900, 450)
    context.lineTo(950, 450);
    context.stroke();
}