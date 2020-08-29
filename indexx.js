//fs is a node module and it is used to read and write data from files 
const fs = require('fs')


// this is how you read files in node js synchronously 
const fileRead = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(fileRead)

const textOut = `This is what we know about the avocado: ${fileRead}. \n Created on ${Date.now()}`
console.log(textOut)


// this is how I write a file using writeFileSync and it takes two parameter the location of the file I am writing and the text of what I want it to sat
fs.writeFileSync('./txt/randommm.txt', 'hi eder')
console.log('File was written!')