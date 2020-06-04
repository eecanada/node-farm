// fs is a node module
const fs = require('fs')

// takes two arguements, path to file I am reading and character encoding
// reading a file
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(textIn)


const textOut = `This is what we know about the avocado ${textIn}. \n Created on ${Date.now()}`
//writing and creating file, takes two arguements path of file and what I want to put inside it 
fs.writeFileSync('./txt/output.txt',textOut)
console.log('File has been written')

