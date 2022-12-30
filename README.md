# Live U Test

This project has been created as part of the fullstack developer job application process at Live U.

It was developed using [Node.js](http://nodejs.org/) with the [Express](https://expressjs.com/) framework and utilizes [SQL Server](https://www.microsoft.com/pt-br/sql-server/).

<p align="center">
    <img src="/images/form.png">
</p>

## Cloning

```sh
git clone git@github.com:leohige/LiveUTest.git
```

## Install Dependencies

```
npm install
```

## Config

Before starting the project, you need to create a file called **.env** in the root directory of the project and set the necessary configuration below.
```
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USER=
DATABASE_PASS=
DATABASE_NAME=
```

## Run Tests
```
npm test
```

## Run App (Development)
```
npm run dev
```

## Run App (Production)

```
npm start
```

## Database Schema
<p align="center">
    <img src="/images/schema.png">
</p>
