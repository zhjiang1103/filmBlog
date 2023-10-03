import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const CreateContact = ({ onSaveContact, editingContact, onUpdateContact }) => {
    // This is the original State with not initial student
    const [contact, setContact] = useState(
        editingContact || {
            name: "",
            email: "",
            phone: "",
            notes: "",
        }
    );

    //create functions that handle the event of the user typing into the form
    const handleNameChange = (event) => {
        const name = event.target.value;
        setContact((contact) => ({ ...contact, name }));
    };

    const handleEmailChange = (event) => {
        const email = event.target.value;
        setContact((contact) => ({ ...contact, email }));
    };

    const handlePhoneChange = (event) => {
        const phone = event.target.value;
        //console.log(iscurrent);
        setContact((contact) => ({ ...contact, phone }));
    };

    const handleNotesChange = (event) => {
        const notes = event.target.value;
        //console.log(iscurrent);
        setContact((contact) => ({ ...contact, notes }));
    };

    const clearForm = () => {
        setContact({ name: "", email: "", phone: "", notes: "" });
    };

    //A function to handle the post request
    const postContact = (newContact) => {
        return fetch("http://localhost:8080/api/contactlist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newContact)
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log("From the post ", data);
                //I'm sending data to the List of Students (the parent) for updating the list
                onSaveContact(data);
                //this line just for cleaning the form
                clearForm();
            });
    };

    //A function to handle the post request
    const putContact = (toEditContact) => {
        return fetch(`http://localhost:8080/api/contactlist/${toEditContact.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(toEditContact)
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                onUpdateContact(data);
                //this line just for cleaning the form
                clearForm();
            });
    };

    //A function to handle the submit in both cases - Post and Put request!
    const handleSubmit = (e) => {
        e.preventDefault();
        if (contact.id) {
            putContact(contact);
        } else {
            postContact(contact);
        }
    };

    return (
        <Form className="form-students" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <input
                    type="text"
                    id="add-user-name"
                    placeholder="Name"
                    required
                    value={contact.name}
                    onChange={handleNameChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <input
                    type="text"
                    id="add-user-lastname"
                    placeholder="Email"
                    required
                    value={contact.email}
                    onChange={handleEmailChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone</Form.Label>
                <input
                    type="text"
                    id="add-user-lastname"
                    placeholder="Phone"
                    required
                    value={contact.phone}
                    onChange={handlePhoneChange}
                />
            </Form.Group>
            <Form.Label>Notes</Form.Label>
            <textarea
                placeholder="Enter your note"
                value={contact.notes}
                onChange={handleNotesChange}
                rows={4} // You can adjust the number of rows as needed
            ></textarea>

            <Form.Group>
                <Button type="submit" variant="outline-success">
                    {contact.id ? "Edit Contact" : "Add Contact"}
                </Button>
                {contact.id ? (
                    <Button type="button" variant="outline-warning" onClick={clearForm}>
                        Cancel
                    </Button>
                ) : null}
            </Form.Group>
        </Form>
    );
};

export default CreateContact;