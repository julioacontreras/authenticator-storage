import arg from 'arg';
import {CreateUserTest} from './createUser'
import {DeleteUserTest} from './deleteUser'
import {UpdateUserTest} from './updateUser'
import {FindUserTest} from './findUser'
import {FindUsersTest} from './findUsers'
const chalk = require('chalk');

console.log(chalk.yellow('Agent'));
console.log(chalk.yellow('-------------------'));

function parseArgumentsIntoOptions(rawArgs: Array<string>) {
  const args = arg(
    {
      '--id': String,
      '--repeat': Number,
      '--create-user': Boolean,
      '--find-users': Boolean,
      '--find-user': Boolean,
      '--update-user': Boolean,
      '--delete-user': Boolean,
      '-cust': '--create-user',
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    id: args['--id'] || '',
    repeat: args['--repeat'] || 1,
    createuser: args['--create-user'] || false,
    findUser: args['--find-user'] || false,
    findUsers: args['--find-users'] || false,
    updateUser: args['--update-user'] || false,
    deleteUser: args['--delete-user'] || false,
  };
 }

 export function cli(args: Array<string>) {
  let options = parseArgumentsIntoOptions(args);
  if (options.createuser) {
    CreateUserTest(options.repeat)
  } else
  if (options.deleteUser) {
    DeleteUserTest(options.id)
  } else
  if (options.updateUser) {
    UpdateUserTest(options.id)
  } else
  if (options.findUser) {
    FindUserTest(options.id)
  } else
  if (options.findUsers) {
    FindUsersTest()
  }  
 }

 cli(process.argv)

