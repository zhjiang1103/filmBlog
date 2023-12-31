import React, { useRef, useState } from 'react';

import { Button, Form } from "react-bootstrap";




const NewFilmForm = () => {
//const [newFilm, setNewFilm] = useState({})

//const [newFilm, setNewFilm] = useState({});

    // Refs to get values from input fields
    const nameRef = useRef();
    const releasedRef = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();
    const urlRef = useRef()

    const handleAddFilm = (event) => {
        event.preventDefault();

        // Get values from refs
        const film = {
            name: nameRef.current?.value,
            released: releasedRef.current?.value,
            category: categoryRef.current?.value,
            description: descriptionRef.current?.value,
            url: urlRef.current?.value,
        };






        // Call the provided callback to add the film
       // props.onAddFilm(newFilm);
       

        

       
        //console.log("Inside the POST, ", newFilm);
        fetch("http://localhost:8080/api/films", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(film)
        })
        .then(() => event.target.reset())

       
    };

    const handleReleaseDateChange = (newValue)=>(
        console.log(newValue)
    )

    return (
       
    
   

        <Form className="form-students" onSubmit={handleAddFilm}>
            <Form.Group>
                <Form.Label>Film Name</Form.Label>
                <input
                    type="text"
                    id="add-user-name"
                    placeholder="Name"
                    required
                    ref={nameRef}
                //onChange={handleAddFilm}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Released Date</Form.Label>
                <input
                    type="text"
                    id="add-user-lastname"
                    placeholder="Released Date"
                    //required
                    ref={releasedRef}
                //onChange={handleAddFilm}
                />
                
            </Form.Group>
            <Form.Group>
                <Form.Label>Category</Form.Label>
                <input
                    type="text"
                    id="add-user-lastname"
                    placeholder="Category"
                    ref={categoryRef}
                //onChange={handleAddFilm}
                />
            </Form.Group>
            <Form.Label>Description</Form.Label>
            <textarea
                placeholder="Film description"
                ref={descriptionRef}
                //onChange={handleAddFilm}
                rows={4} // You can adjust the number of rows as needed
            ></textarea>

            <Form.Group>
                <Button type="submit" variant="outline-success">
                    Add Film
                </Button>

            </Form.Group>
        </Form>
       
    );
};

export default NewFilmForm



