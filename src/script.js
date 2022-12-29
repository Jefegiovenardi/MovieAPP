document.querySelector('#genre-form').addEventListener('submit', function(event) {
    document.querySelector('#results').innerHTML = '';
    let genre = document.querySelector('#genre-select').value;
    let randomPage = Math.floor(Math.random() * 100) + 1;
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=78a6f70900c89c0c26b1dbb15ace17ed&language=pt-BR&sort_by=popularity.desc&include_adult=true&include_video=true&page=${randomPage}&with_genres=${genre}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let randomIndex = Math.floor(Math.random() * data.results.length);
            let randomMovie = data.results[randomIndex];
            let movieElement = document.createElement('div');
            let nameElement = document.createElement('h2');
            nameElement.textContent = randomMovie.title;
            movieElement.appendChild(nameElement);
            let imageElement = document.createElement('img');
            imageElement.src = `https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`;
            movieElement.appendChild(imageElement);
            let descriptionElement = document.createElement('p');
            descriptionElement.textContent = randomMovie.overview;
            movieElement.appendChild(descriptionElement);
            let ratingElement = document.createElement('p');
            ratingElement.textContent = `Nota: ${randomMovie.vote_average}`;
            movieElement.appendChild(ratingElement);
            document.querySelector('#results').appendChild(movieElement);
    });

    event.preventDefault();
});
