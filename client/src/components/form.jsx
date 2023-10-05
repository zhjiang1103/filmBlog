import React, { useRef, useState } from 'react';
import { Button, Form } from "react-bootstrap";

   

const Form = (props) => {
     
    const [newFilm, setNewFilm] = useState({
        name: "",
        released: "",
        category: "",
        description: "",
        url: "",
    })
  // Refs to get values from input fields
  const nameRef = useRef(null);
  const releasedRef = useRef(null);
  const categoryRef = useRef(null);
  const descriptionRef = useRef(null);
  const urlRef = useRef(null)

  const handleAddFilm = (event) => {
    event.preventDefault();

    // Get values from refs
    const name = nameRef.current.value;
    const released = releasedRef.current.value;
    const category = categoryRef.current.value;
    const description = descriptionRef.current.value;
    const url = urlRef.current.value;
    
    setNewFilm({
        name,
        released,
        category,
        description,
        url,
      });  
    

    // Call the provided callback to add the film
    props.onAddFilm(newFilm);

    // Clear the form fields
    nameRef.current.value = '';
    releasedRef.current.value = '';
    categoryRef.current.value = '';
    descriptionRef.current.value = '';
    urlRef.current.value = '';
  };

  return (
    <Form className="form-students" onSubmit={handleAddFilm}>
            <Form.Group>
                <Form.Label>Film Name</Form.Label>
                <input
                    type="text"
                    id="add-user-name"
                    placeholder="Name"
                    required
                    value={nameRef}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Released Date</Form.Label>
                <input
                    type="text"
                    id="add-user-lastname"
                    placeholder="Released Date"
                    required
                    value={releasedRef}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Category</Form.Label>
                <input
                    type="text"
                    id="add-user-lastname"
                    placeholder="Category"
                    value={categoryRef}
                />
            </Form.Group>
            <Form.Label>Description</Form.Label>
            <textarea
                placeholder="Film description"
                value={descriptionRef}
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

export default Form;

  

