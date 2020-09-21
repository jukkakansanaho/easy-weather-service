_Easy-Weather-Service | jukka.kansanaho@gmail.com | 2020-09-20_

# Easy Weather Service

EasyWeatherService (EWS) is a serverless weather service combining together weather data from various sources.

## Use Cases

- As a user, I can store weather data to Easy Weather Service.
- As a weather bot, I query current weather data and weather forecast data and store them to Easy Weather Service.
- As a user, I can query current weather and historical weather from Easy Weather Service.
- As a user, I can compare historical weather data and historical weather forecast data.

## Project technical design

- REST API provided via AWS API Gateway and AWS Lambda functions
- Data stored in AWS DynamoDB
- Weather-bot (NodeJS or python)
- ReactJS based Web User Interface for user data input and queries.
- User account management and access management handled via AWS Cognito

## Services used in this project

- AWS Lambda
- Serverless Framework
- AWS API Gateway
- AWS DynamoDB
- AWS Cognito
- [Open Weather Map service](https://openweathermap.org/)

## Data Structure

- Weather (table)

  - lat (latitude)
  - lon (longitude)
  - tz (e.g. Europe/Finland)
  - units (C|F, m/s|mph)
  - loc_name (e.g. Oulu)
  - curret_temp
  - curret_wind_speed
  - curret_wind_deg

- NOTE: this structure is only for the beginning - will be updated.

## Project related NOTES

- ...
