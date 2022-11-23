"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let amountNumbers = 1000;
let average = 0;

fillArray();

function fillArray(){
    let numbers = [];

    for(let i = 0; i < amountNumbers; i++){
        numbers[i] = Utils.randomNumber(0, 100);
    }
    console.log(calculateAverage(numbers));
}

function calculateAverage(list){
    for(let i = 0; i < amountNumbers; i++){
        //calculate average
        average += list[i];
    }
        average = average / amountNumbers;
        console.log(average);
        return average;
}
