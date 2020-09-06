'use strict';

var AWS = require('aws-sdk');
var path = require('path');
var config = require(path.resolve('./config.js'));

interface SetProfileArgs {
  region: string;
  environment: string;
}

function SetProfile(argv: SetProfileArgs) {
  console.log(
    'what does this look like ?',
    config[argv.region][argv.environment].REGION
  );
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  let creds = new AWS.SharedIniFileCredentials({
    profile: config[argv.region][argv.environment].PROFILE,
  });
  AWS.config.update({
    region: config[argv.region][argv.environment].REGION,
  });
  AWS.config.credentials = creds;
  return;
}
//testing contributions
module.exports.SetProfile = SetProfile;
