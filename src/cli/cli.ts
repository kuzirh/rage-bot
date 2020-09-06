#!/usr/bin/env node
'use strict';

require('yargs')
  .usage('\nGet mad, then get over it.”\n')
  .commandDir('./cmds/create')
  .commandDir('./cmds/update')
  .commandDir('./cmds/teardown')
  .demandCommand()
  .help().argv;
