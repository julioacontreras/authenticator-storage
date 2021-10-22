const chalk = require('chalk');

export const printStartServer = (serverName: string) => {
  console.info(' ');
  console.info(' ' + chalk.hex('#DEADED')(serverName));
  console.info(' ' + chalk.hex('#DEADED')('--------------------------------'));
};

export const printStartService = (title: string, description: string) => {
  console.info(` ${title}: ${description}`);
};

export const printAction = (title: string, description: string) => {
  console.info(` ${title}: ${chalk.hex('#DEADED')(description)}`);
};

export const printError = (title: string, details: unknown) => {
  console.info(` ${chalk.red(title)}: ${details}`);
};
