const BASE_URL = 'http://localhost:3000';

const newMovieInfo1 = {
    id: 6,
    title: "Dead Poets Society",
    genre: "Drama",
    director: "Peter Weir",
    year: 1989
};

const newMovieInfo2 = {
    id: 7,
    title: "Black Swan",
    genre: "Drama",
    director: "Darren Aronofsky",
    year: 2010
};


function postMovie(newMovie) {
    const options = {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };

    return fetch(`${BASE_URL}/movies`, options).then(r => r.json()).then(data => console.log(data));
}

postMovie(newMovieInfo1);
postMovie(newMovieInfo2);