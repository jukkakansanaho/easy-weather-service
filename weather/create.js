'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  // if (
  //   typeof data.lat !== 'number' ||
  //   typeof data.lon !== 'number' ||
  //   typeof data.tz !== 'string' ||
  //   typeof data.system !== 'string' ||
  //   typeof data.source !== 'string' ||
  //   typeof data.loc_name !== 'string' ||
  //   typeof data.current_temp !== 'number' ||
  //   typeof data.current_wind_speed !== 'number' ||
  //   typeof data.current_wind_deg !== 'number'
  // ) {
  //   console.error('Validation Failed');
  //   callback(null, {
  //     statusCode: 400,
  //     headers: { 'Content-Type': 'text/plain' },
  //     body: 'Could not create the object.',
  //   });
  //   return;
  // }
  // Prepare object params:
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      dt: timestamp,
      lat: data.lat,
      lon: data.lon,
      tz: data.tz,
      units: data.units,
      data_source: data.data_source,
      loc_name: data.loc_name,
      current_temp: data.current_temp,
      current_wind_speed: data.current_wind_speed,
      current_wind_deg: data.current_wind_deg,
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };

  // write to the DB:
  dynamoDb.put(params, (error) => {
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Could not create the object.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
  });
};
