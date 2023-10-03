import React from 'react';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'

//const ViewContact = ({contact, toUpdate, toDelete})
const FilmDetail = (props) => {

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
            <Card.Img variant="top" src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1694448805/amc-cdn/production/2/movies/70800/70810/PosterDynamic/157067.jpg" style={{ width: '20%', height: '20%' }}  />
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