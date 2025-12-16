import { useState } from 'react';
import Header from './components/Header';
import Recommendations from './components/Recommendations';

function App() {
  const [srcParam, setSrcParam] = useState("")

function setSearchParameterEnter(event) {
  let searchParameter = "";
  if (event && event.key === "Enter") {
    if (document.querySelector(".nav__input") === document.activeElement) {
      searchParameter = document.querySelector(".nav__input").value;
      fetchMovies(searchParameter);
    } else {
      searchParameter = document.querySelector(".header__src__input").value;
      fetchMovies(searchParameter);
    }
  }
}

function setSearchParameterClick() {
  let searchParameter = document.querySelector(".header__src__input").value;
  fetchMovies(searchParameter);
}

async function fetchMovies(searchParameter) {
  try {
    if (!!searchParameter) {
      document.querySelector(
        ".src-results__name"
      ).innerHTML = `"${searchParameter}"`;
    } else {
      searchParameter = "avengers";
    }

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=caccfb1f&s=${searchParameter}`
    );
    const data = await response.json();
    const movies = data.Search.slice(0, 6);
    renderMovies(movies);
  } catch (error) {
    console.log(error);
    document.querySelector(
      "#movie-list"
    ).innerHTML = `<h3 class="src-results__movies__error">No results found</h3>`;
  }
}

fetchMovies();


  return (
    <>
      <Header />
      <Recommendations />

    </>
  )

}

export default App
