const { readFile, writeFile } = require("fs")

const readFileFunc = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, "utf8", (err, data) => {
            if(err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}
const writeFileFunc = (path, data) => {
    return new Promise((resolve, reject) => {
        writeFile(path, data, "utf8", (err) => {
            if(err) {
                reject(err)
            } else {
                resolve("file written")
            }
        })
    })
}

let data1, data2
readFileFunc("./content/first.txt")
.then((data) => {
    console.log(data)
    data1 = data
    return readFileFunc("./content/subfolder/test.txt")
})
.then((data) => {
    console.log(data)
    data2 = data
    return writeFileFunc("./content/results.txt", data1+data2)
}).then((res) => console.log(res))
.catch((err) => console.log(err))

// readFile("./content/first.txt", "utf8", (err, data) => {
//     if(err) {
//         console.log(err)
//         return
//     } else {
//         console.log(data)
//     }
// })
// writeFile("./content/subfolder/new.txt", "written data asynchronously", "utf8", (err) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log("file written")
//     }
// })