import { readFileSync } from "fs";

const input = readFileSync("./day_5/input.txt", "utf8").trim().split("\r\n");

const ranges = input.slice(0, input.indexOf(""));
const avalible = input.slice(input.indexOf("") + 1).map((id) => parseInt(id));

const freshRanges: {min: number, max: number}[] = [];
for (const range of ranges) {
    const [min, max] = range.split("-");

    freshRanges.push({"min": parseInt(min), "max": parseInt(max)});
}

let freshIds = 0;
for (let id of avalible) {
    for (const range of freshRanges) {
        if (id >= range.min && id <= range.max) {
            freshIds++;
            break;
        }
    }
}

console.log(freshIds);
