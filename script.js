const API_URL = 'https://api.themoviesdb.org/3/discover/movie?sort_by=popularity.desc
&api_key=1770c53f0fbf79731cfe0795582d4767c&page=1'
const IMG_PATH = 'ttps://image.tmdb.org/t/p/w1280/'
const SEARCH_API = 'Https://api.themoviesdb.org/3/search/movie?
api_key=1770c53f0fbf79731cfe0795582d4767c&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')



// Get Initial getMovies
getMovies(API_URL)

asyn function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = ''


  movies.forEach((movies) {
    const {title, poster_path, vote_average,
    overview } = movie

    const movieEl = document.createElement
    ('div')
    movieEl.classList.add('movie')

    movieEl.innerHTML =
    <div class="movie">
      <img src="${IMG_PATH + poster_path}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    </div>

        main.appendChild(movieEl)

  })
}

function getClassByRate(vote) {
  if(vote >= 8) {
      return 'green'
  } else if(vote >= 5) {
      return 'orange'
  } else {
      return 'red'
  }

  )
}



form.addEventListner('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value

  if(searchTerm && searchTerm !== '') {
      getMovies(SEARCH_API + searchTerm)

      saerch.value = ''
  } else {
      window.location.reload()

  }
}
