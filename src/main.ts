import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// eslint-disable-next-line no-unused-expressions
yargs(hideBin(process.argv))
  .command('curl <url>', 'fetch the contents of the URL', () => {}, (argv) => {
    console.info(argv)
  })
  .demandCommand()
  .strict()
  .help().argv;
