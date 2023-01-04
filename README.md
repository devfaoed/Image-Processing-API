# udacity- nano-degree-image-pro-api-task

## Overview

This is an API that can be used in two different ways. The first, as a simple placeholder API that allows us to place images into our frontend with the size set via url parameters. The second use case is as a library to serve properly scaled versions of our images to the frontend to reduce page load size.

## Requirement

Here, I will list all the dependencies used in this project and how to install them.

#### 1. TypeScript

`npm i -D typescript ts-node`

#### 2. express and type express(Typescript support for express)

```
npm i -S express
npm i -D @types/express
```

#### 3. nodemon

`npm i -D nodemon`

#### 4. rimraf

`npm install --save-dev rimraf`

#### 5. eslint

`npx eslint --init`

#### 6. prettier

`npm install --save-dev prettier`

#### 7. set up prettier and eslint

`npm install --save-dev eslint-config-prettier eslint-plugin-prettier`

#### 8. Jest with type definition and typescript jest runner

`npm i -D jest @types/jest ts-jest`

#### 9. SuperTest with type definition

`npm i -D supertest @types/supertest`

#### 10. morgan and types

`npm i -P morgan @types/morgan`

#### 11. sharp and types

`npm i -P sharp @types/sharp`

#### 11. ejs

`npm i ejs

## How to build and start the server

The project can be built and run in the following ways

### 1. Install all dependencies

`npm install`

### 2. Build

`npm run build`

This command will build the typeScript code into JavaScript and save them in the `./build` folder.

### 3. Start the Server

`npm start`

This command will start the server running on port `5000`. And the front end homepage will be accessible at `http://localhost:4000`

## Endpoints and Functionality.

This project defines two endpoint.

### 1. available images can be accessed through the endpoint

`GET /`

### 2. Get specific image from the available images

`GET /images?filename={IMAGE_NAME}`

### 3. Create thumb version of image

`GET /images/?filename={IMAGE_NAME}&height={HEIGHT}&width={WIDTH}`
