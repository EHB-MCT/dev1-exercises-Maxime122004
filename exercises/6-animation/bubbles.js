"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let frameCount = 0;
//drawBubble(100, 100, 100);
//drawBubble(500, 200, 50);
//drawBubble(250, 500, 200);


drawBubbles();

function drawBubbles() {
    if (frameCount % 5 == 0) {
        let x = Utils.randomNumber(0, width);
        let y = Utils.randomNumber(0, height);
        let radius = Utils.randomNumber(5, 100);
        let hue = Utils.randomNumber(160, 240);
        drawBubble(x, y, radius, hue);
    }
    frameCount++;
    requestAnimationFrame(drawBubbles);
}


function drawBubble(x, y, radius, hue) {
    context.fillStyle = Utils.hsl(hue, 50, 50);
    Utils.fillCircle(x, y, radius);
    context.fillStyle = Utils.hsl(hue, 50, 75);
    Utils.fillCircle(x + 33, y - 33, radius / 4);
    console.log(x);
    console.log(y);
    console.log(radius);
}
