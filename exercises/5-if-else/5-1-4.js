"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawDots();

function drawDots() {

    for (let i = 0; i < 50000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        if (x > width/1.5) {
            context.fillStyle = "white";
        }
        else if (y > height/ 1.5){
            context.fillStyle = "white";
        }
        else {
            context.fillStyle = "green";
        }
        Utils.fillCircle(x, y, 5);
    }

}