//node js is built around modules 
const fs = require('fs')

//readFileSync used to read file and takes in file location and character encoding 
const readInput = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(readInput)

//
const text = 'I learn js, node, mongo, and react'
const writeText = fs.writeFileSync('./txt/randomTxt', `${text}`, )
console.log(writeText)
