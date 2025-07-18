# RESTful API Node Server Boilerplate

Build Status Coverage Status PRs Welcome

A boilerplate/starter project for quickly building RESTful APIs using Node.js, Express, and Mongoose.

By running a single command, you will get a production-ready Node.js app installed and fully configured on your machine. The app comes with many built-in features, such as authentication using JWT, request validation, unit and integration tests, continuous integration, docker support, API documentation, pagination, etc. For more details, check the features list below.

Quick Start
To create a project, simply run:
npx create-nodejs-express-app `<project-name>`

Or

npm init nodejs-express-app `<project-name>`
npm init nodejs-express-app <project-name>
Manual Installation
If you would still prefer to do the installation manually, follow these steps:

git clone --depth 1 [https://github.com/hagopj13/node-express-boilerplate.git](https://github.com/hagopj13/node-express-boilerplate.git)
cd node-express-boilerplate
npx rimraf ./.git
cd node-express-boilerplate
npx rimraf ./.git
Install the dependencies:

yarn install
Set the environment variables:

# open .env and modify the environment variables (if needed)

## Table of Contents

- Features
- Commands
- Environment Variables
- Project Structure
- API Documentation
- Error Handling
- Validation
- Authentication
- Authorization
- Logging
- Custom Mongoose Plugins
- Linting
- Contributing

## Features
Contributing
Features
NoSQL database: MongoDB object data modeling using Mongoose
Authentication and authorization: using passport
Validation: request data validation using Joi
Logging: using winston and morgan
Testing: unit and integration tests using Jest
Error handling: centralized error handling mechanism
API documentation: with swagger-jsdoc and swagger-ui-express
Process management: advanced production process management using PM2
Dependency management: with Yarn
Environment variables: using dotenv and cross-env
Security: set security HTTP headers using helmet
Santizing: sanitize request data against xss and query injection
CORS: Cross-Origin Resource-Sharing enabled using cors
Compression: gzip compression with compression
CI: continuous integration with Travis CI
Docker support
## Commands

**Running locally:**
 |--validations\    # Request data validation schemas
 |--app.js          # Express app
 |--index.js        # App entry point
API Documentation
To view the list of available APIs and their specifications, run the server and go to http://localhost:3000/v1/docs in your browser. This documentation page is automatically generated using the swagger definitions written as comments in the route files.

API Endpoints
List of available routes:

Auth routes:
POST /v1/auth/register - register
POST /v1/auth/login - login
POST /v1/auth/refresh-tokens - refresh auth tokens
POST /v1/auth/forgot-password - send reset password email
POST /v1/auth/reset-password - reset password
POST /v1/auth/send-verification-email - send verification email
POST /v1/auth/verify-email - verify email

User routes:
POST /v1/users - create a user
GET /v1/users - get all users
GET /v1/users/:userId - get user
PATCH /v1/users/:userId - update user
DELETE /v1/users/:userId - delete user

Error Handling
The app has a centralized error handling mechanism.

Controllers should try to catch the errors and forward them to the error handling middleware (by calling next(error)). For convenience, you can also wrap the controller inside the catchAsync utility wrapper, which forwards the error.

const catchAsync = require('../utils/catchAsync');

const controller = catchAsync(async (req, res) => {
  // this error will be forwarded to the error handling middleware
  throw new Error('Something wrong happened');
});
The error handling middleware sends an error response, which has the following format:

{
  "code": 404,
  "message": "Not found"
}
When running in development mode, the error response also contains the error stack.

The app has a utility ApiError class to which you can attach a response code and a message, and then throw it from anywhere (catchAsync will catch it).

For example, if you are trying to get a user from the DB who is not found, and you want to send a 404 error, the code should look something like:

const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const User = require('../models/User');

const getUser = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
};
Validation
Request data is validated using Joi. Check the documentation for more details on how to write Joi validation schemas.

The validation schemas are defined in the src/validations directory and are used in the routes by providing them as parameters to the validate middleware.

const express = require('express');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/users', validate(userValidation.createUser), userController.createUser);
Authentication
To require authentication for certain routes, you can use the auth middleware.

const express = require('express');
const auth = require('../../middlewares/auth');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/users', auth(), userController.createUser);
These routes require a valid JWT access token in the Authorization request header using the Bearer schema. If the request does not contain a valid access token, an Unauthorized (401) error is thrown.

Generating Access Tokens:

An access token can be generated by making a successful call to the register (POST /v1/auth/register) or login (POST /v1/auth/login) endpoints. The response of these endpoints also contains refresh tokens (explained below).

An access token is valid for 30 minutes. You can modify this expiration time by changing the JWT_ACCESS_EXPIRATION_MINUTES environment variable in the .env file.

Refreshing Access Tokens:

After the access token expires, a new access token can be generated, by making a call to the refresh token endpoint (POST /v1/auth/refresh-tokens) and sending along a valid refresh token in the request body. This call returns a new access token and a new refresh token.

A refresh token is valid for 30 days. You can modify this expiration time by changing the JWT_REFRESH_EXPIRATION_DAYS environment variable in the .env file.

Authorization
The auth middleware can also be used to require certain rights/permissions to access a route.

const express = require('express');
const auth = require('../../middlewares/auth');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/users', auth('manageUsers'), userController.createUser);
In the example above, an authenticated user can access this route only if that user has the manageUsers permission.

The permissions are role-based. You can view the permissions/rights of each role in the src/config/roles.js file.

If the user making the request does not have the required permissions to access this route, a Forbidden (403) error is thrown.

Logging
Import the logger from src/config/logger.js. It is using the Winston logging library.

Logging should be done according to the following severity levels (ascending order from most important to least important):

const logger = require('<path to src>/config/logger');

logger.error('message'); // level 0
logger.warn('message'); // level 1
logger.info('message'); // level 2
logger.http('message'); // level 3
logger.verbose('message'); // level 4
logger.debug('message'); // level 5
In development mode, log messages of all severity levels will be printed to the console.

In production mode, only info, warn, and error logs will be printed to the console.
It is up to the server (or process manager) to actually read them from the console and store them in log files.
This app uses pm2 in production mode, which is already configured to store the logs in log files.

Note: API request information (request url, response code, timestamp, etc.) are also automatically logged (using morgan).

Custom Mongoose Plugins
The app also contains 2 custom mongoose plugins that you can attach to any mongoose model schema. You can find the plugins in src/models/plugins.

const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const userSchema = mongoose.Schema(
  {
    /* schema definition here */
  },
  { timestamps: true }
);

userSchema.plugin(toJSON);
userSchema.plugin(paginate);

const User = mongoose.model('User', userSchema);
toJSON
The toJSON plugin applies the following changes in the toJSON transform call:

removes __v, createdAt, updatedAt, and any schema path that has private: true
replaces _id with id
paginate
The paginate plugin adds the paginate static method to the mongoose schema.

Adding this plugin to the User model schema will allow you to do the following:

const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};
The filter param is a regular mongo filter.

The options param can have the following (optional) fields:

const options = {
  sortBy: 'name:desc', // sort order
  limit: 5, // maximum results per page
  page: 2, // page number
};
The plugin also supports sorting by multiple criteria (separated by a comma): sortBy: name:desc,role:asc

The paginate method returns a Promise, which fulfills with an object having the following properties:

{
  "results": [],
  "page": 2,
  "limit": 5,
  "totalPages": 10,
  "totalResults": 48
}
Linting
Linting is done using ESLint and Prettier.

In this app, ESLint is configured to follow the Airbnb JavaScript style guide with some modifications. It also extends eslint-config-prettier to turn off all rules that are unnecessary or might conflict with Prettier.
const logger = require('`<path to src>`/config/logger');
To modify the ESLint configuration, update the .eslintrc.json file. To modify the Prettier configuration, update the .prettierrc.json file.

To prevent a certain file or directory from being linted, add it to .eslintignore and .prettierignore.

To maintain a consistent coding style across different IDEs, the project contains .editorconfig

Contributing
Contributions are more than welcome! Please check out the contributing guide.

Inspirations
danielfsousa/express-rest-es2017-boilerplate
madhums/node-express-mongoose
kunalkapadia/express-mongoose-es6-rest-api
License
MIT    /*schema definition here*/
MIT