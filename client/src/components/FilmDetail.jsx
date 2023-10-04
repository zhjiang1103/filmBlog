import React from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';




//const ViewContact = ({contact, toUpdate, toDelete})
const FilmDetail = () => {
    const { id } = useParams();

    const [film, setFilm] = useState([]);


    //this is the state needed for the UpdateRequest
    //const [editingcontact, setEditingContact] = useState(null)

    const loadFilmWithID = () => {
        // A function to fetch the list of students that will be load anytime that list change
        fetch(`http://localhost:8080/api/films/${id}`)
            .then((response) => response.json())
            .then((result) => {
                console.log("result", result)
                setFilm(result[0]);
            });
    }

    useEffect(() => {
        loadFilmWithID();
        console.log("individual Film", film)
        console.log("id", id)
    }, [id]);

    

    // const onUpdate = (toUpdateContact) => {
    //     toUpdate(toUpdateContact)
    // }

    // const onDelete = (toDeleteContact) => {
    //     toDelete(toDeleteContact)
    // }

    // Function to format the release date


    return (
        <Card>
            <Card.Body>
                <Card.Title>{film.name}</Card.Title>
                <Card.Img variant="top" src={film.url} style={{ width: '20%', height: '20%' }} />
                <Card.Text>
                    <div>
                        Film Description: {film.description}
                    </div>
                    <div>
                        Category:{film.category}
                    </div>

                </Card.Text>

            </Card.Body>
        </Card>
    )

}

export default FilmDetail