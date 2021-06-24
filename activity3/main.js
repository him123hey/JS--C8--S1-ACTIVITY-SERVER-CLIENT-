const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.static("frontend"));
app.use(express.json());

const PORT = 8080;
let movies = JSON.parse(fs.readFileSync("movies.json", "utf8"));

function getMovies(startDate, endDate) {
  let result = [];
  for (let movie of movies) {
    if (movie.published >= startDate && movie.published <= endDate) {
      result.push(movie);
    }
  }
  return result;
}

app.get("/movies", (req, res) => {
  let start = req.query.start;
  let end = req.query.end;
  res.send(getMovies(start, end));
});

app.listen(PORT, () => {
  console.log("I listen on port " + PORT);
});
