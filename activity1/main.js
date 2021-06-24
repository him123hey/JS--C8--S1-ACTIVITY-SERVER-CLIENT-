const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.static("frontend"));
app.use(express.json());

const PORT = 8080;
let movies = JSON.parse(fs.readFileSync("movies.json", "utf8"));

function getMovies(startDate, endDate) {
	// Complete this function to filter the movies published
	// after the start date and before the end date
}

console.log(getMovies(2019, 2022));
