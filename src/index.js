const debug = process.env.NODE_ENV !== 'production' ? true : false

console.log('index.js')

if (debug) {
  console.log('process.env.NODE_ENV')
  console.log('--debug--')
}
