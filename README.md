# Express MongoDB service

Single endpoint that fetches the data in a MongoDB collection and returns aggregated and filtered data.

## How to run

1. Install all the dependencies using `npm i`
2. Create a new `.env` file. The provided `.env.example` can be used as a reference
3. Run the project with nodemon using `npm start`

Another option would be to build and run a Docker image from the Dockerfile

```bash
docker build --tag express-mongodb-service .
docker run --env-file .env -p3000:3000 -d -it express-mongodb-service
```

## Serverless deployment

This project uses Serverless to enable the deployment of the project to AWS Lambda.

The wrapped code that will run in AWS Lambda can be tested locally using the following command:

```bash
npm run serverlessOffline
```

Once everything is ready to be deployed, and after having the AWS CLI properly configured, this command will make the service go live:

```bash
npm run deploy
```

## Running tests

The project includes some tests that can be run with:

```bash
npm run test
```
