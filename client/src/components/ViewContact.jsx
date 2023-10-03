import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'

const ViewContact = ({contact, toUpdate, toDelete}) => {

    const onUpdate = (toUpdateContact) => {
        toUpdate(toUpdateContact)
    }

    const onDelete = (toDeleteContact) => {
        toDelete(toDeleteContact)
    }

    return (
        <Card>
            <Card.Body>
            <Card.Title>{contact.name}</Card.Title>
            <Card.Text>
                <div>
                    Email:{contact.email}
                </div>
                <div>
                    Phone:{contact.phone}
                </div>
                <div>
                    Notes:{contact.notes}
                </div>
                
            </Card.Text>
            <Button variant="outline-danger" onClick={()=>{onDelete(contact)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(contact)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button>
            </Card.Body>
        </Card>
    )

}

export default ViewContact