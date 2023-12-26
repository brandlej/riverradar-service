# riverradar-service

## Description
Service behind [riverradar-web](https://github.com/brandlej/riverradar-web). Interacts with external providers, currently [USGS](https://waterservices.usgs.gov/), to pull in water data.

## Getting Started
1. Install dependencies
`npm install`
2. Set environment variables
`cp .env.sample .env`
3. Start docker services
`npm run docker:up`
4. Run service
`npm run start`

### Setting up the Database
Run the Migrations and Database Seeders:

```bash
npm run db:fresh
```

