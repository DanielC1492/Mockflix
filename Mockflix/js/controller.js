let url = 'http://api.themoviedb.org/3/movie/popular?api_key=c0b6dea31a9d647a6b7d1eafa59bacaa'

// 500 pages in total





for (let i = 1; i <= 2; i++) {
    let page = '&page=';
    let promise = axios.get(url + page + i);

    // Promesa de un array de pelis
    let pelisArrayPromise = promise.then((response) => response.data.results);
    resultsPromise = promise.then(response => response.results);

    // Renderizar pelis

    const pintaLasPelis = (pelisCollection) => {
        const divPelisDomElement = document.getElementById('pelis');

        pelisCollection.map((pelicula) => {
            const pathImg = 'https://image.tmdb.org/t/p/w500';
            const newPeliDomElement = document.createElement('div');
            const titleMovie = document.createElement('div')
            const moviePic = document.createElement('img')

            divPelisDomElement.appendChild(newPeliDomElement)
            newPeliDomElement.appendChild(titleMovie)
            newPeliDomElement.appendChild(moviePic)

            newPeliDomElement.setAttribute('class', 'titlePicture')
            titleMovie.setAttribute('class', 'title')
            titleMovie.innerHTML = pelicula.title;
            moviePic.setAttribute('src', pathImg + pelicula.poster_path);

        });
    }

    //Esta funcion recibe un array de peliculas y las pinta
    pelisArrayPromise.then(pintaLasPelis);
}




// Movie searcher

let urlSearcher = 'http://api.themoviedb.org/3/search/multi?api_key=c0b6dea31a9d647a6b7d1eafa59bacaa&query=';




document.querySelector('#submit').addEventListener('click', () => {
    let input = document.querySelector('#searcher').value;

    let searchApi = axios.get(urlSearcher + input);
    let arraySearch = searchApi.then((response) => response.data.results)


    const searchRender = (pelisCollection) => {
        const divPelisDomElement = document.getElementById('showSelection');

        pelisCollection.map((pelicula) => {
            const pathImg = 'https://image.tmdb.org/t/p/w500';
            const newPeliDomElement = document.createElement('div');
            const titleMovie = document.createElement('div')
            const moviePic = document.createElement('img')

            divPelisDomElement.appendChild(newPeliDomElement)
            newPeliDomElement.appendChild(titleMovie)
            newPeliDomElement.appendChild(moviePic)

            newPeliDomElement.setAttribute('class', 'titlePicture')
            titleMovie.setAttribute('class', 'title')
            titleMovie.innerHTML = pelicula.title;
            moviePic.setAttribute('src', pathImg + pelicula.poster_path);

        });
    }

    //Esta funcion recibe un array de peliculas y las pinta
    arraySearch.then(searchRender);

});