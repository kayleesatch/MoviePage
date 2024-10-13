//API: "https://www.omdbapi.com/?i=tt3896198&apikey=b550a61&s=fast"


const movieEl = document.querySelector(".movie__results")

async function movies(){
    const movieList = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=b550a61&s=fast")
    const movieData = await movieList.json()
    movieEl.innerHTML = movieData.map((movieResults) => indexHTML(movieResults)).join("")
}
console.log(movieData)
movies()
//what is the difference between "key" and value?
function showMovies(movieResults) {
    localStorage.setItem("movie", movie)
    window.location.href = `${window.location.origin}/index.html`
}

function MoviesHTML(movieResults) {
    return `
        <div class="movie__card">
            <img src="movie__poster">${movie.Poster}</img>
            <h3 class="movie__title">${movie.Title}</h3>
            <p class="movie__year">${movie.Year}</p>
        </div>`
        
    }
    //what am i supposed to be console.log-ing
    console.log(movieEl)