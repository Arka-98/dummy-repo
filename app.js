// const number = 3
// if(number > 0) {
//     console.log("hey number is greater than 0")
// } else {
//     console.log("number is less than 0")
// }
console.log(__dirname)
console.log(__filename)

const os = require("os")
const path = require("path")

console.log(os.userInfo().username)
console.log(os.type())
console.log(path.sep)