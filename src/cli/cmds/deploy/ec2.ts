'use strict';
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
};
