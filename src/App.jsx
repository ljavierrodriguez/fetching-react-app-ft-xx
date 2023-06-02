import React, { useEffect, useState } from 'react'

const App = () => {

    const [students, setStudents] = useState(null);
    const [notes, setNotes] = useState(null);


    useEffect(() => {


        getStudents("http://localhost:3000/students")
            .then((response) => response.json())
            .then((data) => setStudents(data))
            .catch((error) => console.log(error));

        getNotes("http://localhost:3000/notes")
            .then((response) => response.json())
            .then((data) => setNotes(data))
            .catch((error) => console.log(error));


    }, [])

    const getStudents = (url, options = {}) => {
        return fetch(url, options)
    }

    const getNotes = (url, options = {}) => {
        return fetch(url, options)
    }

    const postStudent = (url, options = {}) => {
        return fetch(url, options);
    }

    const putStudent = (url, options = {}) => {
        return fetch(url, options);
    }

    const deleteStudent = (url, options = {}) => {
        return fetch(url, options);
    }

    const createStudent = (data) => {
        let url = "http://localhost:3000/students";
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        postStudent(url, options)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            })
            .catch((error) => console.log(error));
    }

    const updateStudent = (data) => {
        let url = `http://localhost:3000/students/${data.id}`;
        let options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        putStudent(url, options)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            })
            .catch((error) => console.log(error));
    }

    const eraseStudent = (data) => {
        let url = `http://localhost:3000/students/${data.id}`;
        let options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        deleteStudent(url, options)
            .then((response) => response.json())
            .catch((error) => console.log(error));
    }


    return (
        <div className='d-flex flex-column p-3'>
            <button className="btn btn-primary btn-sm my-2"
                onClick={() => {
                    let student = {
                        name: 'John',
                        lastname: 'Doe'
                    }
                    createStudent(student);
                }}

            >Create Student</button>
            <button className="btn btn-warning btn-sm my-2"
                onClick={() => {
                    let student = {
                        id: 2,
                        name: 'Jane',
                        lastname: 'Doe',
                        age: 'Unknown'
                    }
                    updateStudent(student);
                }}

            >Update Student</button>

            <button className="btn btn-danger btn-sm my-2"
                onClick={() => {
                    let student = {
                        id: 3,
                    }
                    updateStudent(student);
                }}

            >Delete Student</button>

        </div>
    )
}

export default App