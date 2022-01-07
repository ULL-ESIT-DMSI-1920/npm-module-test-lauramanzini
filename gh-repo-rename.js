#!/usr/bin/env node

const ins = require("util").inspect;

const shell = require('shelljs');
const { Command } = require('commander');
const program = new Command();
const { version } = require("./package.json")
const { getRepoId, renameRepo } = require('./repo-rename')

program
  .version(version)
  .option('-r, --repo <reponame>', 'repo')
  .option('-o, --org <organization>', 'organization')
  .option('-n, --name <name>', 'name');

program.parse(process.argv);

debugger;

let {org , repo, name } = program.opts(); // de esta manera estoy creando ALIAS 

if(!org || !repo || !name) program.help();

// comprobar que git y gh están instalados
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

if (!shell.which('gh')) {
  shell.echo('Sorry, this script requires gh cli');
  shell.exit(1);
} 

const ID = getRepoId(org, name);

const newName = renameRepo(ID, name);

console.log(`The repository '${org}/${repo}' has been renamed to '${newName}'`);


