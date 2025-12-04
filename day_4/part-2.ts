import { readFileSync } from "fs";

const input = readFileSync("./day_4/input.txt", "utf8").trim().split("\r\n");

const matricks = []
for (const row of input) {
    const mRow = [];
    for (const point of row) {
        mRow.push(point === "." ? 0 : 1)
    }
    matricks.push(mRow)
}

let totalRollsAccessed = 0;
let accessibleRolls = 0;
do {
    accessibleRolls = 0;
    const touched = []

    for (let i = 0; i < matricks.length; i++) {
        for (let y = 0; y < matricks[i].length; y++) {
            let adjecentRolls = 0;
            
            if (matricks[i]?.[y] == 0) continue;

            if(matricks[i - 1]?.[y - 1] === 1) adjecentRolls++;
            if(matricks[i - 1]?.[y] === 1) adjecentRolls++;
            if(matricks[i - 1]?.[y + 1] === 1) adjecentRolls++;
            if(matricks[i]?.[y - 1] === 1) adjecentRolls++;
            if(matricks[i]?.[y + 1] === 1) adjecentRolls++;
            if(matricks[i + 1]?.[y - 1] === 1) adjecentRolls++;
            if(matricks[i + 1]?.[y] === 1) adjecentRolls++;
            if(matricks[i + 1]?.[y + 1] === 1) adjecentRolls++;
            
            if(4 > adjecentRolls) {
                accessibleRolls++;
                touched.push([i, y])
            }
        }
    }

    for (const point of touched) {
        matricks[point[0]][point[1]] = 0;
    }
    
    totalRollsAccessed += accessibleRolls;
} while(0 < accessibleRolls);

console.log(totalRollsAccessed);
