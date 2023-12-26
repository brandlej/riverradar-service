# riverradar-service

## Description
Service behind [riverradar-web](https://github.com/brandlej/riverradar-web). Interacts with external providers, currently [USGS](https://waterservices.usgs.gov/), to pull in water data.

## Getting Started
1. Install dependencies
`npm install`
2. Set environment variables
`cp .env.sample .env`
2. Start docker services
`npm run docker:up`
3. Migrate database
`npm run db:migrate`
4. Run service
`npm run start`
