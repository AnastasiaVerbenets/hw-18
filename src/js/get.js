const BASE_URL = 'http://localhost:4040';

function fetchStudents() {
    return fetch(`${BASE_URL}/students`).then(r => r.json());
}

fetchStudents();

function fetchStudentById(id) {
    return fetch(`${BASE_URL}/students/${id}`).then(r => r.json());
}

fetchStudentById(3)