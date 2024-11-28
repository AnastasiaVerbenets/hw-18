const BASE_URL = 'http://localhost:4040';

const newStudentInfo = {
    id: "4",
    name: "Piter Liner",
    age: 21,
    email: "piter.liner@example.com",
    phone: "666-9999"
};

const newStudentInfo2 = {
    id: "5",
    name: "amksksksk Liner",
    age: 21,
    email: "piter.liner@example.com",
    phone: "666-9999"
};

function postStudent(newStudent) {
    const options = {
        method: "POST",
        body: JSON.stringify(newStudent),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };

    return fetch(`${BASE_URL}/students`, options).then(r => r.json()).then(data => console.log(data));
}

postStudent(newStudentInfo);
postStudent(newStudentInfo2);
