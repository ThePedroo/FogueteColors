const child = require('child_process')
const axios = require('axios')
const version = '1.1.4' // DO NOT CHANGE THIS

async function verifyVersion() {
  let result = await axios.get('https://registry.npmjs.com/-/v1/search?text=foguetecolors')
  if(version != result.data.objects[0].package.version) console.warn(`Your running a old version of foguetecolors, please run 'npm install foguetecolors@${result.data.objects[0].package.version}' for update foguetecolors for ${result.data.objects[0].package.version} version.`)
}

function blue(message) {
  if(message == null) throw new Error('Received null, try changing your code.')
  if(message == undefined) throw new Error('Received undefined, try changing your code.')
 return `\u001b[34m${message}\u001b[39m`
}

function green(message) {
  if(message == null) throw new Error('Received null, try changing your code.')
  if(message == undefined) throw new Error('Received undefined, try changing your code.')
 return `\u001b[32m${message}\u001b[39m`
}

function pink(message) {
  if(message == null) throw new Error('Received null, try changing your code.')
  if(message == undefined) throw new Error('Received undefined, try changing your code.')
 return `\u001b[31m${message}\u001b[39m`
}

function cyan(message) {
  if(message == null) throw new Error('Received null, try changing your code.')
  if(message == undefined) throw new Error('Received undefined, try changing your code.')
 return `\u001b[36m${message}\u001b[39m`
}

function black(message) {
  if(message == null) throw new Error('Received null, try changing your code.')
  if(message == undefined) throw new Error('Received undefined, try changing your code.')
 return `\u001b[30m${message}\u001b[39m`
}

function orange(message) {
  if(message == null) throw new Error('Received null, try changing your code.')
  if(message == undefined) throw new Error('Received undefined, try changing your code.')
 return `\u001b[33m${message}\u001b[33m`
}


function red(message) {
  if(message == null) throw new Error('Received null, try changing your code.')
  if(message == undefined) throw new Error('Received undefined, try changing your code.')
 return `\u001b[31m${message}\u001b[33m`
}

function gray(message) {
  if(message == null) throw new Error('Received null, try changing your code.')
  if(message == undefined) throw new Error('Received undefined, try changing your code.')
 return `\u001b[37m${message}\u001b[33m`
}

function lightBlue(message) {
  if(message == null) throw new Error('Received null, try changing your code.')
  if(message == undefined) throw new Error('Received undefined, try changing your code.')
 return `\u001b[94m${message}\u001b[33m`
}

function purple(message) {
  if(message == null) throw new Error('Received null, try changing your code.')
  if(message == undefined) throw new Error('Received undefined, try changing your code.')
 return `\u001b[95m${message}\u001b[33m`
}

function cyan(message) {
  if(message == null) throw new Error('Received null, try changing your code.')
  if(message == undefined) throw new Error('Received undefined, try changing your code.')
 return `\u001b[96m${message}\u001b[33m`
}

function underlinedGreen(message) {
  if(message == null) throw new Error('Received null, try changing your code.')
  if(message == undefined) throw new Error('Received undefined, try changing your code.')
 return `\u001b[42m${message}\u001b[33m`
}

function underlinedBlue(message) {
  if(message == null) throw new Error('Received null, try changing your code.')
  if(message == undefined) throw new Error('Received undefined, try changing your code.')
 return `\u001b[44m${message}\u001b[33m`
}

function underlinedWhite(message) {
  if(message == null) throw new Error('Received null, try changing your code.')
  if(message == undefined) throw new Error('Received undefined, try changing your code.')
 return `\u001b[47m${message}\u001b[33m`
}

function underlinedPink(message) {
  if(message == null) throw new Error('Received null, try changing your code.')
  if(message == undefined) throw new Error('Received undefined, try changing your code.')
 return `\u001b[41m${message}\u001b[33m`
}

function underlinedBlack(message) {
  if(message == null) throw new Error('Received null, try changing your code.')
  if(message == undefined) throw new Error('Received undefined, try changing your code.')
 return `\u001b[40m${message}\u001b[33m`
}

function underlinedPurple(message) {
  if(message == null) throw new Error('Received null, try changing your code.')
  if(message == undefined) throw new Error('Received undefined, try changing your code.')
 return `\u001b[45m${message}\u001b[33m`
}

function underlinedCyan(message) {
  if(message == null) throw new Error('Received null, try changing your code.')
  if(message == undefined) throw new Error('Received undefined, try changing your code.')
 return `\u001b[46m${message}\u001b[33m`
}

function underlinedOrange(message) {
  if(message == null) throw new Error('Received null, try changing your code.')
  if(message == undefined) throw new Error('Received undefined, try changing your code.')
 return `\u001b[43m${message}\u001b[33m`
}

function isNumber(number) {
  if(typeof number != 'string') number = number.toString()
  let number2 = true
  if(!number.match(/\d+/g) || number.length > number.match(/\d+/g)[0].length) number2 = false
  return number2
}

function isSignal(signal) {
  let signal2 = true
if(!signal || signal != '+' && signal != '-' && signal != '×' && signal && signal != '÷') signal2 = false
return signal2
}

function calc(number, signal, number2) {
 if(!isNumber(number)) throw new Error(`${number} is not a number`)
 if(!isNumber(number2)) throw new Error(`${number} is not a number`)
 if(!isSignal(signal)) throw new Error(`${signal} is not a signal, remember we only support the signals: +, -, ×, ÷.`)
  let total = 0
if(signal == '+') total = Number(number) + Number(number2)
if(signal == '÷') total = Number(number) / Number(number2)
if(signal == '-') total = Number(number) - Number(number2)
if(signal == '×') total = Number(number) * Number(number2)
return total
}

function exec(execute) {
  child.exec(exec)
}

async function searchForUpdates() {
  let result = await axios.get('https://registry.npmjs.com/-/v1/search?text=foguetecolors')
  if(version != result.data.objects[0].package.version) {
    return `Foguetecolors is up-to-date`
  } else {
    return `Foguetecolors is out-of-date`
  }
}

async function update() {
let result = await axios.get('https://registry.npmjs.com/-/v1/search?text=foguetecolors')
  if(version == result.data.objects[0].package.version) throw new Error(`Your foguetecolors is alredy up-to-date!`)
  console.log(`Updating foguetecolors...`)
  await child.exec('npm install foguetecolors@' + result.data.objects[0].package.version)
setTimeout(() => {
 console.log(`Now foguetecolors is in ${result.data.objects[0].package.version} version.`)
}, 9000)
}

verifyVersion()


module.exports = {
update,
searchForUpdates,
  colors: {
  blue, 
  green,
  pink,
  cyan,
  black,
  orange,
  red,
  gray,
  lightBlue,
  purple,
  cyan, 
  underlinedGreen,
  underlinedBlue,
  underlinedWhite, 
  underlinedPink,
  underlinedBlack,
  underlinedPurple,
  underlinedCyan,
  underlinedOrange
  },
  mathematics: {
    calc,
    isSignal,
    isNumber
  },
  console: {
    exec
  }
}
