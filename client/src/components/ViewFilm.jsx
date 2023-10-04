import React from 'react';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Route, Routes, Link, useParams } from 'react-router-dom';
import FilmDetail from './FilmDetail';



//const ViewContact = ({contact, toUpdate, toDelete})
const ViewFilm = (props) => {
    const { id } = useParams();

    // const onUpdate = (toUpdateContact) => {
    //     toUpdate(toUpdateContact)
    // }

    // const onDelete = (toDeleteContact) => {
    //     toDelete(toDeleteContact)
    // }

    // Function to format the release date


    return (
        <>
            <Card style={{ width: "40%" }}>
                <Card.Body>
                    <Card.Title>{props.film.name}</Card.Title>
                    <Card.Text>
                        <div>
                            Released Date:{moment(props.film.released).format('LL')}
                        </div>
                        <div>
                            Category:{props.film.category}
                        </div>

                    </Card.Text>
                    <Link to={`/films/${props.film.id}`}>
                        <Button variant="outline-info" style={{ padding: '0.6em' }}>Film Details</Button>
                    </Link>

                    {/* <Button variant="outline-info" onClick={() => {navigate(`/films/${props.film.id}`);}} style={{padding: '0.6em'}}> Film Details</Button> */}
                </Card.Body>
            </Card>

        </>
    )

}

export default ViewFilm