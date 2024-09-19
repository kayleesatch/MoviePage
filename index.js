//API: "https://www.omdbapi.com/?i=tt3896198&apikey=b550a61&s=fast"
function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}

async function movieResults(event) {
    const promise = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=b550a61&s=fast")
    const result = await promise.json()
    const movies = result.filter(element => element.fastMovies)
    console.log(movieResults)
}