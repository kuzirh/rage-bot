#!/usr/bin/env node
'use strict';

require('yargs')
  .usage('\nGet mad, then get over it.”\n')
  .commandDir('./cmds/deploy')
  .demandCommand()
  .help().argv;
