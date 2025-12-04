import { readFileSync } from "fs";

const input = readFileSync("./day_3/input.txt", "utf8").trim().split("\n")

let joltage = 0;
for (const bank of input) {
    const batteries = bank.trim().split("");

    let first: number[] = [-1];
    let second: number[] = [-1];
    for (let i = 0; i < batteries.length; i++) {
        const jolt = Number(batteries[i]);

        if (jolt > first[0] && i < batteries.length - 1) {
            first = [jolt, i]
        }
    }
    
    for (let i = first[1] + 1; i < batteries.length; i++) {
        const jolt = Number(batteries[i]);

        if (jolt > second[0]) {
            second = [jolt, i]
        }
    }

    joltage += Number(`${first[0]}${second[0]}`);
}

console.log(joltage);
