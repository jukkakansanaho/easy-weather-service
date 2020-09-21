'use strict';

const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.update = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  // validation
  // if (
  //   typeof data.lat != 'number' ||
  //   typeof data.long != 'number' ||
  //   typeof data.timezone !== 'string' ||
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
  //     body: 'Could not update the object.',
  //   });
  //   return;
  // }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id,
    },
    ExpressionAttributeValues: {
      ':lat': data.lat,
      ':lon': data.lon,
      ':tz': data.tz,
      ':units': data.units,
      ':data_source': data.data_source,
      ':loc_name': data.loc_name,
      ':current_temp': data.current_temp,
      ':current_wind_speed': data.current_wind_speed,
      ':current_wind_deg': data.current_wind_deg,
      ':updatedAt': timestamp,
    },
    UpdateExpression:
      'SET lat = :lat, lon = :lon, tz = :tz, units = :units, data_source = :data_source, loc_name = :loc_name, current_temp = :current_temp, current_wind_speed = :current_wind_speed, current_wind_deg = :current_wind_deg, updatedAt = :updatedAt',
    ReturnValues: 'ALL_NEW',
  };

  // update the object in the database
  dynamoDb.update(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Could not fetch the object.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Attributes),
    };
    callback(null, response);
  });
};
