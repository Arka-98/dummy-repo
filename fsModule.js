const { readFileSync, writeFileSync } = require("fs")

const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/subfolder/test.txt", "utf-8")
console.log(first, second)

writeFileSync("./content/results.txt", `the result : ${first}, ${second}`)