const BASE_URL = 'http://localhost:3000';

const movieToUpdate = {
    genre: "Drama",
    year: 2000
};

function updateMovie(updateMovie, movieId) {
    const options = {
        method: "PATCH",
        body: JSON.stringify(updateMovie),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };

    return fetch(`${BASE_URL}/movies/${movieId}`, options).then(r => r.json()).then(data => console.log(data));
}


updateMovie(movieToUpdate, 3);