'use strict';

var AWS = require('aws-sdk');
var fs = require('fs');
var path = require('path');
var config = require(path.resolve('./config.js'));
var Creds = require('../../../scripts/SetProfile');

exports.command = 'create ec2 <region> <environment>';
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

interface args {
  region: string;
  environment: string;
}

exports.handler = async (argv: args) => {
  Creds.SetProfile(argv);
  let cloudformation = new AWS.CloudFormation();
  let template: string = fs
    .readFileSync(path.resolve('./templates/ec2.yaml'))
    .toString();
  let WHO_AM_I = config[argv.region][argv.environment].WHO_AM_I;
  let { region, environment } = argv;
  var params = {
    StackName: `${WHO_AM_I}-${region}-${environment}-RageContainer` /* required */,
    TemplateBody: template,
  };
  try {
    await cloudformation.createStack(params).promise();
  } catch (error) {
    console.warn(
      {
        message: 'There was an error creating the ec2 stack',
        params,
        template,
      },
      error
    );
  }
};
