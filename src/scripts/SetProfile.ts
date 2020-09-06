'use strict';

var AWS = require('aws-sdk');
const config = require('../../config');

interface setProfileArgs {
  regionType: string;
  environment: string;
}

function setProfile(argv: setProfileArgs) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  let creds = new AWS.SharedIniFileCredentials({
    profile: config[argv.regionType][argv.environment].PROFILE,
  });
  AWS.config.update({
    region: config[argv.regionType][argv.environment].REGION,
  });
  AWS.config.credentials = creds;
  return;
}
//testing contributions
module.exports.setProfile = setProfile;
