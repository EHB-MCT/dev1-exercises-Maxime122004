"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawBricks();

function drawBricks(){
    for(let i = 0; i < 10, i++){
        let x = 50;
        let y = 50 * i;
        let widthSquare = 100;
        let heightSquare = 100;
        context.fillRect(x * i, y * i, widthSquare * i, heightSquare * i);
    }
}
