import { readFileSync } from "fs";

const input = readFileSync("./day_2/input.txt", "utf8").split(",")

let invalidIdsSum = 0;
for (const range of input) {
    const [min, max] = range.split("-")

    for (let i = Number(min); i < Number(max) + 1; i++){
        const str = i.toString()
        const length = str.length
        
        if(length % 2 === 0) {
            const first = str.slice(0, length / 2)
            const second = str.slice(length / 2)
            
            if(first.match(second)) invalidIdsSum += i;
        }
    }
}

console.log(invalidIdsSum);
