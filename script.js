
// DOCS: https://sv443.net/jokeapi/v2/
const jokeApiEndpoint = 'https://v2.jokeapi.dev/joke/Programming?type=twopart';

const changeJokeContent = ({setup, delivery}) => {
  let jokeSetup = document.getElementById("joke-setup");
  let jokeDelivery = document.getElementById("joke-delivery");
  
  jokeSetup.textContent = setup;
  jokeDelivery.textContent =`- ${delivery}`;
}

const updateJoke = () => {
  const loader = document.getElementById("loader");
  const jokeContainer = document.getElementById("joke");

  // Show loader while fetching new joke
  if (loader.classList.contains("hide")) loader.classList.remove("hide");

  // Hide the Jokes and Button while fetching new joke
  if (!jokeContainer.classList.contains("hide")) jokeContainer.classList.add("hide");

  fetch(jokeApiEndpoint)
    .then(response => response.json())
    .then(data => {
      loader.classList.add("hide");
      jokeContainer.classList.remove("hide");
      changeJokeContent({setup: data.setup, delivery: data.delivery});
    });
}

const nextJokeBtn = document.getElementById("next-btn");
nextJokeBtn.addEventListener("click", updateJoke);

updateJoke();

