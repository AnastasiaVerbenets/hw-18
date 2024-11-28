const BASE_URL = 'http://localhost:4040';

function deleteStudent(id) {
    return fetch(`${BASE_URL}/students/${id}`, { method: "DELETE" }).then(r => r.json());
}

deleteStudent(1);