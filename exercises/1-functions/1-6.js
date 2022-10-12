"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawStar();

function drawStar(){

    //vierkant achtergrond//
    context.beginPath();
    context.fillStyle = "orange";
    context.rect(50, 50, 300, 300);
    context.fill();

    //kwartcirkel linkbovenaan//
    context.beginPath();
    context.fillStyle = "white";
    context.arc(50, 50, 150, 0, 90);
    context.fill();

    //kwartcirkel rechtsbovenaan//
    context.beginPath();
    context.fillstyle = "white";
    context.arc(350, 50, 150, 0, -90);
    context.fill();
    
    //kwartcirkel linksonderaan//
    context.beginPath();
    context.fillstyle = "white";
    context.arc(50, 350, 150, 0, 90);
    context.fill();
    
    //kwartcirkel rechtsonderaan//
    context.beginPath();
    context.fillstyle = "white";
    context.arc(350, 350, 150, 0, 180);
    context.fill();

    //lijn 1 diagonaal links//
    context.beginPath();
    context.strokeStyle = "white";
    context.lineWidth = 5;
    context.moveTo(50, 125);
    context.lineTo(275, 350);
    context.stroke();

    //lijn 2 diagonaal links//
    context.beginPath();
    context.strokeStyle = "white";
    context.lineWidth = 5;
    context.moveTo(50, 87.5);
    context.lineTo(312.5, 350);
    context.stroke();
    
    //lijn 3 diagonaal links//
    context.beginPath();
    context.strokeStyle = "white";
    context.lineWidth = 5;
    context.moveTo(50, 50);
    context.lineTo(350, 350);
    context.stroke();
    
    //lijn 4 diagonaal links//
    context.beginPath();
    context.strokeStyle = "white";
    context.lineWidth = 5;
    context.moveTo(87.5, 50);
    context.lineTo(350, 312.5);
    context.stroke();

    //lijn 5 diagonaal links//
    context.beginPath();
    context.strokeStyle = "white";
    context.lineWidth = 5;
    context.moveTo(125, 50);
    context.lineTo(350, 275);
    context.stroke();

    //lijn 1 diagonaal rechts//
    context.beginPath();
    context.strokeStyle = "white";
    context.lineWidth = 5;
    context.moveTo(275, 50);
    context.lineTo(50, 275);
    context.stroke();
    
    //lijn 2 diagonaal rechts//
    context.beginPath();
    context.strokeStyle = "white";
    context.lineWidth = 5;
    context.moveTo(312.5, 50);
    context.lineTo(50, 312.5);
    context.stroke();
    
    //lijn 3 diagonaal rechts//
    context.beginPath();
    context.strokeStyle = "white";
    context.lineWidth = 5;
    context.moveTo(350, 50);
    context.lineTo(50, 350);
    context.stroke();

    //lijn 4 diagonaal rechts//
    context.beginPath();
    context.strokeStyle = "white";
    context.lineWidth = 5;
    context.moveTo(350, 87.5);
    context.lineTo(87.5, 350);
    context.stroke();
    
    //lijn 5 diagonaal rechts//
    context.beginPath();
    context.strokeStyle = "white";
    context.lineWidth = 5;
    context.moveTo(350, 125);
    context.lineTo(125, 350);
    context.stroke();

    //oranje outline//
    context.beginPath();
    context.strokeStyle = "orange";
    context.lineWidth = 5;
    context.rect(50, 50, 300, 300);
    context.stroke();

    //oranje vierkantje midden//
    context.beginPath();
    context.fillStyle = "orange";
    context.rect(175, 175, 50, 50);
    context.fill();
}