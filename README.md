# node-capstone-project
[![Build Status](https://travis-ci.org/Terahpatrick/node-capstone-project.svg?branch=master)](https://travis-ci.org/Terahpatrick/node-capstone-project) [![Coverage Status](https://coveralls.io/repos/github/Terahpatrick/node-capstone-project/badge.svg?branch=master&service=github)](https://coveralls.io/github/Terahpatrick/node-capstone-project?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/6d510a899fdb1f7a8d56/maintainability)](https://codeclimate.com/github/Terahpatrick/node-capstone-project/maintainability)

Internal social network for employees of an organization

#### users endpoints
| Action| Endpoint | Functionality | 
|----------|----------|---------------|
| GET | `/api/v1/auth/create-user`  | Admin register Employee|
| POST | `/api/v1/auth/signin`  | Login Employee|

User signup schema:
```json

  {
	"firstName": "patrick",
	"lastName": "mwangi",
	"email": "terahd@gmail.com",
	"password": "1234",
	"gender": "male",
	"jobRole": "software engineer",
	"department": "Server Side",
	"address": "some1234thing",
	"isAdmin":false
}

```

Employee login schema:
```json
  {
	"email": "ngugi@gmail.com",
	"password": "1234"
}
```

#### GIFs endpoints
| Action| Endpoint | Functionality | 
|----------|----------|---------------|
| POST | `/api/v1/gifs/`  | Employee Post a GIF|
| GET | `/api/v1/gifs/`  | Employee Get GIFs|
| GET | `/api/v1/gifs/:gifId`  | Employee Get a single GIF|
| POST | `/api/v1/gifs/:gifId/comment`  | Employee Post a comment to a GIF|

Gif post schema:
```json
  {
	"title": "An awesome GIF",
	"image": "C:/Users/user/Desktop/official/picture.png"
}
```

Gif comment schema:
```json
  {
    "comment": "A wonderful comment about this GIF"
    }
```


#### categories endpoints
| Action| Endpoint | Functionality | 
|----------|----------|---------------|
| GET | `/api/v1/categories/`  | Admin get categories|
| GET | `/api/v1/categories/:id`  | Admin get single category|
| POST | `/api/v1/categories/`  | Admin create category|
| PATCH | `/api/v1/categories/:id`  | Admin Edit category|
| DELETE | `/api/v1/categories/:id`  | Admin delete category|
| GET | `/api/v1/categories/:categoryId/articles`  | Employee Get articles in a category|

Category schema:
```json
  {
	"categoryName": "updated first category"
}
```


#### articles endpoints
| Action| Endpoint | Functionality | 
|----------|----------|---------------|
| POST | `/api/v1/articles/`  | Employee Post an article|
| GET | `/api/v1/articles/`  | Employee Get articles|
| GET | `/api/v1/articles/:articleId`  | Employee Get a single article|
| PATCH | `/api/v1/articles/:articleId`  | Employee Edit an article|
| DELETE | `/api/v1/articles/:articleId`  | Employee Delete an article|
| POST | `/api/v1/articles/articleId/comment`  | Employee Post an article comment|

Article schema:
```json
 {
	"title": "some article title",
	"article": "some article very long",
	"categoryId": "1361"
}
```


### Prerequisites
- Javascript (A programming language)
- Node.js (A Javascript server side framework)
- Express (Server side framework)
- npm install (dependencies used in the project)
- GitHub project management board (A project management tool) (optional)
- ​PostgreSQL (DataBase)
- Jest (Tool for testing)
- The app is hosted on heroku

# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm run dev` to start the local server

# Code Overview

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [express-jwt](https://github.com/auth0/express-jwt) - Middleware for validating JWTs for authentication
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For generating JWTs used by authentication
- [cloudinary](https://github.com/cloudinary) - To connect to the cloudinary for posting GIFs
- [express-fileupload](https://github.com/jsonwebtoken) - Help us upload and destroy files from a cloudinary
- [pg](https://github.com/pg) - To connect to postgresql database
- [bcrypt](https://github.com/bcrypt) - For hashing password to ensure that where store there are secure
- [@hapi/joi](https://github.com/@hapi/joi) - For validating inputs before hitting database validation.
- [coveralls](https://github.com/coveralls) - For generating coverage for the code tested
- [jest](https://github.com/jest) - For testing our Endpoints
- [supertest](https://github.com/supertest) - Help for testing when working with jest to request server
- [eslint](https://github.com/eslint) - For proper styling of our code.
- [express-async-errors](https://github.com/express-async-errors) - To handle async await catch block.


## Application Structure

- `server.js` - The entry point to our application. This file defines our express server. It also requires the routes and models we'll be using in the application.
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models.
- `controllers/` - This folder contains the route logic and implementation It's the heart of routes folder.
- `middleware/` - This folder contains the middleeware such as authentication middleware and also contains some priveledges such as isAdmin priveledge.
- `starters/` - This folder contains the non API logic implementation.
- `tests/` - This folder contains all test files and test suites.

## Error Handling

In `models/validates` folder, we use @hapi/joi dependency to handle errors before they hit DB. 
In `server` entry file, we use express-async-errors to handle errors in catch block of try-catch block. 

## Authentication

Requests are authenticated using the `Authorization` header with a valid JWT. We define two express middlewares in `middleware/auth.js` that can be used to authenticate requests. The `isAdmin` middleware confers the admin some priveledges. These middlewares will return a 401 status code if the request cannot be authenticated.
