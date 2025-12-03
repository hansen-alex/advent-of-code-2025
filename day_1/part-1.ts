import { readFileSync } from "fs";

const input = readFileSync("./day_1/input.txt", "utf8").split("\n")
const min = 0;
const max = 99;

let timesAtZero = 0;
let dialPosition = 50;

const dialClamp = (initial: number, change: number) => {    
    let value = initial + change % (max + 1);

    if (min > value) {
        value += 100;
    }
    else if (max < value) {
        value -= 100;
    }

    return value
}

for(const movement of input) {
    const direction = movement.slice(0, 1)
    const value = Number(movement.slice(1))
    
    dialPosition = dialClamp(dialPosition, direction === "R" ? value : -value)
    if (dialPosition === 0) timesAtZero += 1;
}

console.log(timesAtZero);
