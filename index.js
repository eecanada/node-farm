// fs is a node module
const fs = require('fs')

// takes two arguements, path to file I am reading and character encoding
const text = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(text)
