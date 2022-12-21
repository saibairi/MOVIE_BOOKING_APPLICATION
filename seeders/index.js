'use strict';
const {HOST,PORT,ENV, DB} = require("../config/server");
const adminSeeder = require("./admin.seeder");
const movieSeeder = require("./movie.seeder");
const genreSeeder = require("./genre.seeder");
const crewSeeder = require("./crew.seeder");
const clientSeeder = require("./client.seeder");
const customerSeeder = require("./customer.seeder");
const reviewSeeder = require("./review.seeder");
const theaterSeeder = require("./theater.seeder");
const { default: mongoose } = require("mongoose");

let exitAfterSeeding = false;

module.exports = {
    seedAll: async () => {
        await mongoose.connect(`mongodb://${HOST}/${DB}`, {family: 4}, (err)).then(async () => {
            await adminSeeder.seed(3);
            await genreSeeder.seed(['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Thriller', 'Western']);
            await crewSeeder.seed(25);
            await reviewSeeder.seed(100);
            await movieSeeder.seed(10);
            await clientSeeder.seed(10);
            await customerSeeder.seed(25);
            await theaterSeeder.seed(25);
        }).catch(err => console.log(`Failed to run seeders because:\n${err}`));
        if(exitAfterSeeding) process.exit();
    }
}

if(process.argv.includes('seed')) {
    exitAfterSeeding = true;
    module.exports.seedAll();
}