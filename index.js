//API: "https://www.omdbapi.com/?i=tt3896198&apikey=b550a61&s=fast"

document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('open__menu')
    const closeBtn = document.getElementById('menu__btn--close')
    const popupMenu = document.getElementById('menu')

    openBtn.addEventListener('click', function() {
        popupMenu.style.display = 'block'
    })

    closeBtn.addEventListener('click', function() {
        popupMenu.style.display = 'none'
    })

    window.addEventListener('click', function(event) {
        if (event.target === popupMenu) {
            popupMenu.style.display = 'none'
        }
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search__btn')
    const searchInput = document.getElementById('search__input')

        searchBtn.addEventListener('click', () => {
            const searchTerm = searchInput.value = ('')
            if (searchTerm) {
                movieMain(searchTerm)
            }
        })
        console.log(movieMain())
    }
)

async function movieMain(searchTerm) {
    const moviesList = await fetch(`https://www.omdbapi.com?i=tt3896198&apikey=b550a61&s=${searchTerm}`)
    const movieData = await moviesList.json()
    const movieEl = document.querySelector(".movie__results")
    console.log(movieData)

    if (movieData.Search && Array.isArray(movieData.Search)) {
        movieEl.innerHTML = movieData.Search.map((movie) => movieHTML(movie)).join("")
    }
    else {
        movieEl.innerHTML = "<p>No movies found</p>"
    }
}

function movieHTML(movie) {
    return `<div class="movie__card">
                <img src="${movie.Poster}" class="movie__poster">
                <h3 class="movie__title">${movie.Title}</h3>
                <p class="movie__year">${movie.Year}</p>
            </div>`
}

console.log(movieMain)