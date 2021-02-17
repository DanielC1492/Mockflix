//funciones
let valor = document.getElementById("buscador");
let valorID = document.getElementById("buscadorID");

//Recursos API

let key = "21694966c56459af7cbbf5ca4187b415";

let recurso = "search";

let criterio = "movie";

let base_url = `http://api.themoviedb.org/3/`;

const call = async(url) => {
    let res = await axios.get(url);

    // if (!res.data.results) {
    //     error = new Error("La url era incorrecta");
    //     return error;
    // }

    if (res.data.results) {
        return res.data.results;
    };

    if (res.data.title) {
        return res.data;
    };
}

const pintar = async(coleccionPintar) => {
    //Proceso para el pintado HTML de las películas
    const divPelisDomElement = document.getElementById('contenedor');
    if (Array.isArray(coleccionPintar)) {
        coleccionPintar.forEach(pelicula => {
            divPelisDomElement.innerHTML += `<div clas='col float-end img-peli'>
        <img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}' width='200px' class='img-fluid float-end'></img></div><div clas='col text-peli'><h2>${pelicula.title}</h2><p>${pelicula.overview}</p></div>`
        });
    };
    if (coleccionPintar.original_title) {
        divPelisDomElement.innerHTML += `<div class='Peliculas'>
            <img src='https://image.tmdb.org/t/p/w500${coleccionPintar.poster_path}' width='200px' class='Picture'>
            </img></div><div class='infoPelis'><h2>${coleccionPintar.original_title}</h2><p>${coleccionPintar.overview}</p></div>`
    };
    return;

};

const buscador = async() => {

    let query = valor.value; {

        //Construccion de la URL 
        let url = `${base_url}${recurso}/${criterio}?api_key=${key}&query=${query}`;
        pintar("cargando");
        let pelis = await call(url);
        pintar(pelis);

    };
};

const buscadorID = async() => {
    let query = valorID.value;

    //Construccion de la URL 

    let url = `${base_url}${criterio}/${query}?api_key=${key}`;
    pintar("cargando");
    let pelis = await call(url);


    pintar(pelis);

};