## Node JS Movie Booking Backend Project

This is a NodeJS powered Web Application, Backend and API Resource hub for it's client interface.

## Installation

**Prepare a location for the project.** We will name the directory `MOVIE_BOOKING_APPLICATION`. Inside the project directory, set up git and pull from the repository. Or alternatively, download the project to the location.

```bash
git init
git pull https://github.com/samiksengupta/MOVIE_BOOKING_APPLICATION.git
```

OR

```bash
git clone https://github.com/samiksengupta/MOVIE_BOOKING_APPLICATION.git .
```
**Install dependencies.** This may take a while.

```bash
npm install
```

**Create a `.env` file** at the project root and copy contents from here into it.

```
HOST = localhost
PORT = 3000
DB = MOVIE_BOOKING_DB
NODE_ENV = development

JWT_SECRET=<YOUR JWT SECRET HERE>
JWT_LIFESPAN=600
```
**Generating a secure JWT Secret**

In the console run the following commands:
```bash
node
require('crypto').randomBytes(64).toString('hex')
```
OR simply call the package.json script that has been set up to quickly generate a cryptographically secure string

```bash
npm run crypto
```
Copy the cryptographically secure string and use it as your `JWT_SECRET`

When you have set up your database configuration, the following scripts can be used to quickly setup the server.

**Run server using nodemon**

```bash
npm run server
```

### Todo

* ~~Create Login and Registration system~~
* ~~Create Authentication and Authorization system~~
* ~~Create Crud Operations with validations~~
* Unit tests