"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawMaze();

function drawMaze(){
    for(let j = 0; j < height; j++){

        for(let i = 0; i < width; i++){

            let rand = Math.round(Math.random());
            context.lineWidth= 5;
            context.strokeStyle = Utils.rgb();
            console.log(rand);

            if(rand == 0){
                Utils.drawLine(-2 + i * 10, -2 + j * 10, 11 + i * 10, 11 + j * 10);
            } else{
                Utils.drawLine(-2 + i * 10, 11 + j * 10, 11 + i * 10, -2 + j * 10);
            }
        }
    }
}