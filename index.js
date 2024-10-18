//API: "https://www.omdbapi.com/?i=tt3896198&apikey=b550a61&s=fast"

    const movieEl = document.querySelector(".movie__results")
    const searchInput = document.querySelector(".search__input")
    const searchButton = document.getElementById("search__btn")
    
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
                movieEl.innerHTML = movieData.Search.map((movieResults) => indexHTML(movieResults)).join("")
            } else {
                movieEl.innerHTML = "<p> No Movies Found.</p>"
            }
        } catch (error) {
            console.error("Error fetching movies:", error)
            document.querySelector(".movies__loading").style.display = "none"
            movieEl.innerHTML = "<p>Error fetching movies. Please try again later.</p>"
        }
    }
    
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
    