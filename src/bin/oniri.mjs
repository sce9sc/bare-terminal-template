import process from 'process'

console.log('Hello from Bare CLI')
console.log('argv:', process.argv.slice(1))

if (process.argv.includes('--help')) {
  console.log('Usage: myapp [options]')
}