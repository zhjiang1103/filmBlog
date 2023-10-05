import { useState, useEffect } from 'react'
import ViewFilm from './ViewFilm'
import form from './Form'
import FilmDetail from './FilmDetail'
import { Route, Routes, Link, useParams } from 'react-router-dom';


const FilmList = () => {


    // this is my original state with an array of films 
    const [films, setFilms] = useState([]);


    //this is the state needed for the UpdateRequest
    //const [editingcontact, setEditingContact] = useState(null)

    const loadFilms = () => {
        // A function to fetch the list of students that will be load anytime that list change
        fetch("http://localhost:8080/api/films")
            .then((response) => response.json())
            .then((films) => {
                setFilms(films);
            });
    }

    useEffect(() => {
        loadFilms();
    }, [films]);

    const onAddFilm = (newFilm) => {
        console.log("Inside the post", newFilm);
        setFilms((films) => [...films, newFilm]);
    }


    //     //A function to control the update in the parent (student component)
    //     const updateContact = (savedContact) => {

    //                 console.log("Inside the put", savedContact)
    //                 setContacts([...contacts, savedContact])
    //                 //loadContacts();
    //     }
    //     // console.log("Line 29 savedStudent", savedStudent);
    //     // This function should update the whole list of students - 



    // //A function to handle the Delete funtionality
    // const onDelete = (contact) => {
    //     //console.log(student, "delete method")
    //     fetch(`http://localhost:8080/api/contactlist/${contact.id}`, {
    //         method: "DELETE"
    //     }).then((response) => {
    //         //console.log(response);
    //         if (response.ok) {
    //             loadContacts();
    //         }
    //     })
    // }

    // //A function to handle the Update functionality
    // const onUpdate = (toUpdateContact) => {
    //     //console.log(toUpdateStudent);
    //     setEditingContact(toUpdateContact);

    // }



    return (
        <div className="mybody">
            <div className="list-students">
                <h2>Films list </h2>
                <ul>
                    {/* {contacts.map((contact) => {
                    return <li key={contact.id}> <ViewContact contact={contact}  toUpdate={onUpdate}  toDelete={onDelete}/></li>
                })} */}
                    {films.map((film) => {
                        return <li key={film.id}> <ViewFilm film={film} /></li>
                    })}


                    {/* {films.map((film) => {
                    return <li key={film.id}> <FilmDetail film={film}/></li>
                })} */}
                </ul>
            </div>
            <div>
                <form onAddFilm={onAddFilm} />
            </div>
            {/* <CreateContact key={editingcontact ? editingcontact.id : null} onSaveContact={onSaveContact} editingContact={editingcontact} onUpdateContact={updateContact} /> */}
        </div>
    );
}

export default FilmList