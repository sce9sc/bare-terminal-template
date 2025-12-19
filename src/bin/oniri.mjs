import process from 'process'
import { program } from 'commander'

try {
  console.log('Oniri CLI')

  const prompt = function readLine(prompt) {
    process.stdout.write(prompt)

    let buffer = ''
    return new Promise(resolve => {
      const onData = chunk => {
        buffer += chunk.toString()
        if (buffer.includes('\n')) {
          process.stdin.off('data', onData)
          resolve(buffer.trim())
        }
      }
      process.stdin.on('data', onData)
    })
  }

  program
    .name('string-util')
    .description('CLI to some JavaScript string utilities')
    .version('0.8.0');

  program.command('split')
    .description('Split a string into substrings and display as an array')
    .argument('<string>', 'string to split')
    .option('--first', 'display just the first substring')
    .option('-s, --separator <char>', 'separator character', ',')
    .action(async (str, options) => {
      const limit = options.first ? 1 : undefined;
      console.log(str.split(options.separator, limit));
      const answer1 = await prompt('Enter password : ')
      const answer2 = await prompt('Enter seed : ')
      console.log('You entered:', answer1,answer2)
      process.exit(0);
    });

  program.parse(process.argv);

} catch (e) {
  console.error('Error in oniri.mjs:', e);
}