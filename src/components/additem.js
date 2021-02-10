import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import List from './list';
export default function AddItem(props) {
    const [title, settitle] = useState('');
    const [desc, setdesc] = useState('');

    const handleSubmit = () => {
        var oldItems = JSON.parse(localStorage.getItem("storeddata")) || [];
        var object = {
            'title': title,
            'desc': desc
        }
        oldItems.push(object);
        localStorage.setItem("storeddata", JSON.stringify(oldItems));
        console.log(object);
    }

    return (

        <Container className="p-3">
            <h1 className="header">Create your comment list below</h1>
            <Form onSubmit={() => handleSubmit()}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Control type="text" placeholder="Enter title" onChange={(e) => settitle(e.target.value)} value={title} />
                </Form.Group>
                <Form.Group controlId="formBasicDescription">
                    <Form.Control type="text" placeholder="Enter Description" onChange={(e) => setdesc(e.target.value)} value={desc} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
            </Button>
            </Form>
           
            <List />
      
            
        </Container >

    )
}