const BASE_URL = 'http://localhost:3000';

const movieToUpdate = {
    id: "2",
    title: "The Godfather",
    genre: "Thriller",
    director: "Francis Ford",
    year: 1970
};

function updateMovie(updateMovie, movieId) {
    const options = {
        method: "PUT",
        body: JSON.stringify(updateMovie),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };

    return fetch(`${BASE_URL}/movies/${movieId}`, options).then(r => r.json()).then(data => console.log(data));
}


updateMovie(movieToUpdate, 3);