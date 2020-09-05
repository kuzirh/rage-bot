#!/usr/bin/env node
'use strict';

require('yargs')
  .usage(
    "\nI write for the same reason I breathe - because if I didn't, I would die.”\n"
  )
  .commandDir('./cmds')
  .demandCommand()
  .help().argv;
