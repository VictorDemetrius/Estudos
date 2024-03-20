const API_KEY = "94d6ddd93db63868c339b12a2610f37e";

async function getMovies(){
    try{
            let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
            let data = await response.json();
            displayMovie(data.results);
            
        } catch(error){
            console.log(error)
        }
}

function displayMovie(movies){
    let movieContainer = document.getElementById("moviesContainer");
    movieContainer.innerHTML = "";


    movies.forEach(movie => {
    let movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.innerHTML = `
    <h2> ${movie.title} </h2>
    <img src ="https://image.tmdb.org/t/p/w500${movie.poster_path}">
    <p> ${movie.overview}</p>
    `;
    movieContainer.appendChild(movieElement);
    });
}