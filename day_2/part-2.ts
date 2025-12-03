import { readFileSync } from "fs";

const input = readFileSync("./day_2/input.txt", "utf8").split(",")

let invalidIdsSum = 0;
for (const range of input) {
    const [min, max] = range.split("-")

    for (let i = Number(min); i < Number(max) + 1; i++){
        const str = i.toString()
        const length = str.length

        for (let y = 1; y <= length / 2; y++) {
            const parts = str.match(new RegExp(`[\\s\\S]{1,${y}}`, "g"));
            if (2 > parts.length) continue;
            
            let invalid = true;
            const pattern = parts[0]

            if (length % pattern.length !== 0) continue;

            for (const part of parts) {
                if (!pattern.match(part)) {
                    invalid = false
                    break;
                }
            }

            if(invalid) {
                invalidIdsSum += i;
                break;
            }
        }
    }
}

console.log(invalidIdsSum);
