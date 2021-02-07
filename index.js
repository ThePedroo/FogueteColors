function blue(message) {
  if(message == null) throw new Error('Received null, try changing your code.')
  if(message == undefined) throw new Error('Received undefined, try changing your code.')
 return `[34m${message}[39m`
}

function green(message) {
  if(message == null) throw new Error('Received null, try changing your code.')
  if(message == undefined) throw new Error('Received undefined, try changing your code.')
 return `[32m${message}[39m`
}

module.exports = {
  blue, 
  green
}
