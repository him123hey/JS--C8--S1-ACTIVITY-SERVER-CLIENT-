const SERVER_PORT = 8080;
const SERVER_IP = "localhost";
const BASE_URL = "http://" + SERVER_IP + ":" + SERVER_PORT;

function onShowButton(event) {
  event.preventDefault();
  let startDate = startInput.options[startInput.selectedIndex].text;
  let endDate = endInput.options[endInput.selectedIndex].text;
 
  // TODO : get the movies from  start to end date
}

function displayMovies(movies) {
  let moviesContainer = document.getElementById("moviesContainer");
  moviesContainer.remove();
  moviesContainer = document.createElement("ul");
  moviesContainer.id = "moviesContainer";
  document.body.appendChild(moviesContainer);

  for (let movie of movies) {
    let movieLi = document.createElement("li");
    movieLi.textContent = movie.title + " - Published: " + movie.published;
    moviesContainer.appendChild(movieLi);
  }
}

const startInput = document.getElementById("startInput");
const endInput = document.getElementById("endInput");

const showButton = document.getElementById("showButton");
showButton.addEventListener("click", onShowButton);
