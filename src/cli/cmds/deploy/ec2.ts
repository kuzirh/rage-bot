'use strict';
let AWS = require('aws-sdk');
let fs = require('fs');
const path = require('path');
exports.command = 'deploy ec2 <region> <environment>';
exports.desc = 'bp teardown and clean up for resources deployed to cloud';
exports.builder = {
  region: {
    describe: 'region deployment is happening in (pub/gov)',
    type: 'string',
    default: 'pub',
  },
  environment: {
    describe: 'environment that the deployment is happening in (pub/prod)',
    type: 'string',
    default: 'dev',
  },
};

exports.handler = (argv: object) => {
  console.log('this is argv ...', argv);
  let cloudformation = new AWS.CloudFormation();
  let template: string = fs
    .readFileSync(path.resolve('./templates/ec2.yaml'))
    .toString();
  console.log('this is string ..', template);
};
