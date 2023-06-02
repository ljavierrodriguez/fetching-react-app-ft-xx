
let uri = "";
let options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    // body: "" // POST, PUT
};

let promise = fetch(uri, options)

promise.then((response) => {
    console.log(response.status);
    return response.json();
}).then((responseJson) => {
    console.log(responseJson);
}).catch((error) => {
    console.log(error);
})


let student = {
    name: 'John',
    lastname: 'Doe'
}

let raw = JSON.stringify(student); // "{name:'John', lastname: 'Doe'}";

let uriPost = "/students";
let optionsPost = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: raw
}

fetch(uriPost, optionsPost)
    .then((response) => {
        return response.json();
    })
    .then((responseJson) => {
        console.log(responseJson);
    })
    .catch((error) => {
        console.log(error);
    })



let studentPut = {
    id: 1,
    name: 'John',
    lastname: 'Doe'
}

let rawPut = JSON.stringify(studentPut); // "{name:'John', lastname: 'Doe'}";

let uriPut = `/students/${studentPut.id}`;
let optionsPut = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: raw
}

fetch(uriPut, optionsPut)
    .then((response) => {
        return response.json();
    })
    .then((responseJson) => {
        console.log(responseJson);
    })
    .catch((error) => {
        console.log(error);
    })


//CRUD = Create, Read, Update, Delete
// Create = POST
// Update = PUT
// Delete = DELETE
// Read = GET