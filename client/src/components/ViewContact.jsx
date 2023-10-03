import React from 'react';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'

//const ViewContact = ({contact, toUpdate, toDelete})
const ViewContact = (props) => {

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
            <Card.Text>
                <div>
                    Released Date:{moment(props.film.released).format('LL')}
                </div>
                <div>
                    Category:{props.film.category}
                </div>
                
            </Card.Text>
            {/* <Button variant="outline-danger" onClick={()=>{onDelete(contact)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(contact)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button> */}
            </Card.Body>
        </Card>
    )

}

export default ViewContact