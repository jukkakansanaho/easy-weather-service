_Easy-Weather-Service | jukka.kansanaho@gmail.com | 2020-09-20_

# Easy Weather Service

Target of this project is to build a serverless weather service.

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
  - dt
  - lat
  - long
  - timezone
  - loc_name
  - type (current | forecast)
  - temp
  - wind_speed
  - wind_deg

## Project related NOTES

- ...
