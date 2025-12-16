const Movie = () => {

        function renderMovies(movies) {
  const movieList = document.querySelector("#movie-list");

  movieList.innerHTML = `<i class="fa-solid fa-spinner src-results__movies__spinner"></i>`;

  const moviesHTML = movies
    .map(
      (movie) =>
    )
    .join("");
  setTimeout(() => (movieList.innerHTML = moviesHTML), 500);
}

  return (
            <figure class="src-results__movie">
              <div class="src-results__movie__content">
                <img
                  src={movie.Poster}
                  alt="movie name"
                  class="src-results__movie__content__poster"
                />
                <div class="src-results__movie__content__info">
                  <h3 class="src-results__movie__content__info__title">
                    {movie.Title}
                  </h3>
                  <div class="src-results__movie__content__info__wrapper">
                    <div class="src-results__movie__content__info__stats">
                      <i
                        class="fa-solid fa-clock src-results__movie__content__info__stats__icon"
                      ></i>
                      <p class="src-results__movie__content__info__stats__para">
                        136m
                      </p>
                    </div>
                    <div class="src-results__movie__content__info__stats">
                      <i
                        class="fa-solid fa-star src-results__movie__content__info__stats__icon"
                      ></i>
                      <p class="src-results__movie__content__info__stats__para">
                        4.5
                      </p>
                    </div>
                    <div class="src-results__movie__content__info__stats">
                      <i
                        class="fa-solid fa-earth-americas src-results__movie__content__info__stats__icon"
                      ></i>
                      <p class="src-results__movie__content__info__stats__para">
                        English
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h4 class="src-results__movie__subtitle">
                {movie.Title}
              </h4>
            </figure>
  );
}

export default Movie;
