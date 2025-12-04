import { readFileSync } from "fs";

const input = readFileSync("./day_3/input.txt", "utf8").trim().split("\n")

let joltage = 0;
for (const bank of input) {
    const batteries = bank.trim().split("");

    let minYIndex = 0
    const selectedBatteries = [[-1], [-1], [-1], [-1], [-1], [-1], [-1], [-1], [-1], [-1], [-1], [-1]]
    for (let i = 0; i < selectedBatteries.length; i++) {
        for (let y = minYIndex; y < batteries.length - (Math.abs(i - selectedBatteries.length) - 1); y++) {
            const jolt = Number(batteries[y]);

            if (jolt > selectedBatteries[i][0]) {
                selectedBatteries[i] = [jolt, y]
                minYIndex = y + 1;
            }
        }
    }

    joltage += parseInt(selectedBatteries.reduce((acc, curr) => acc + curr[0].toString(), ""))
}

console.log(joltage);
