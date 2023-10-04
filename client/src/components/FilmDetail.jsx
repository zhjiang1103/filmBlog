import React from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';




//const ViewContact = ({contact, toUpdate, toDelete})
const FilmDetail = (props) => {
    const { id } = useParams();
    

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
                <Card.Title>{props.film.name}</Card.Title>
                <Card.Img variant="top" src={props.film.url} style={{ width: '20%', height: '20%' }} />
                <Card.Text>
                    <div>
                        Film Description: {props.film.description}
                    </div>
                    <div>
                        Category:{props.film.category}
                    </div>

                </Card.Text>

            </Card.Body>
        </Card>
    )

}

export default FilmDetail