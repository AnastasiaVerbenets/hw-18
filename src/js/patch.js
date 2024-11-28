const BASE_URL = 'http://localhost:4040';

const studentToUpdate = {
    email: "johnny.doe_official@example.com",
    age: 22,
};

function updateStudent(updateStudent, id) {
    const options = {
        method: "PATCH",
        body: JSON.stringify(updateStudent),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };

    return fetch(`${BASE_URL}/students/${id}`, options).then(r => r.json()).then(data => console.log(data));
}

updateStudent(studentToUpdate, 1);
