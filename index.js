//API: "https://www.omdbapi.com/?i=tt3896198&apikey=b550a61&s=fast"

    const movieEl = document.querySelector(".movie__results")
    const searchInput = document.querySelector(".search__input")
    const searchButton = document.getElementById("search__btn")
    const sortSelect = document.getElementById("sort__select")

    let movies = []
    
    function indexHTML(movie) {
        return `
        <div class="movie__card">
        <img src="${movie.Poster}" alt="${movie.Title} poster"/>
        <h3 class="movie__title">${movie.Title}</h3>
        <p class="movie__year">${movie.Year}</p>
        </div>`
    }
    
    async function fetchMovies(query){
        document.querySelector(".movies__loading").style.display = "block"
        document.getElementById("results").style.display = "block"

        try{
            const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=b550a61&s=${query}`)
            
            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            
            const movieData = await response.json()
            document.querySelector(".movies__loading").style.display = "none"

            if(movieData.Search) {
                movies = movieData.Search
                displayMovies(movies)
            } else {
                movieEl.innerHTML = "<p> No Movies Found.</p>"
            }
        } catch (error) {
            console.error("Error fetching movies:", error)
            document.querySelector(".movies__loading").style.display = "none"
            movieEl.innerHTML = "<p>Error fetching movies. Please try again later.</p>"
        }
    }

    function displayMovies(moviesToDisplay) {
        movieEl.innerHTML = moviesToDisplay.map((movie) => indexHTML(movie)).join("")
    }

    sortSelect.addEventListener("change", () => {
        const sortOrder = sortSelect.value
        let sortedMovies

        if (sortOrder === "newest") {
            sortedMovies = [...movies].sort((a, b) => parseInt(b.Year) - parseInt(a.Year))
        } else if (sortOrder === "oldest") {
            sortedMovies = [...movies].sort((a, b) => parseInt(a.Year) - parseInt(b.Year))
        }

        displayMovies(sortedMovies)
    })
    
    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim()
        if (query) {
            fetchMovies(query)
        }
    })
    
    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            searchButton.click()
        }
    })
    