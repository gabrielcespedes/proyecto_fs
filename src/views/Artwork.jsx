import React, { useState } from 'react';
import { Button, Card, Row, Col, Container, ButtonGroup} from "react-bootstrap";
import { useParams } from "react-router-dom";


import { useContext } from "react";
import MyContext from "../my_context";

const Artwork = () => {
    const { artworks, setArtworks, setNavTotal, updatingNavTotal } = useContext(MyContext);
    const {id} = useParams();
    const [count, setCount] = useState(1)
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    let selectedArtwork = artworks[artworks.findIndex((element) => element.id == id)];
    const addingAmount = () => {
        selectedArtwork.amount += count;
        setNavTotal(updatingNavTotal);
    }

    console.log(id);
    console.log(artworks);
    console.log(selectedArtwork);

    return(
        <Container className="border m-5 p-5">
        <Row xs={1} md={2} lg={2}>
            <Col>
            <Card>
                <Card.Img src={selectedArtwork.url_image}></Card.Img>
            </Card>
            </Col>
            <Col>
            <Card.Title className='text-left'>{selectedArtwork.title}</Card.Title>
            <Card.Text className="my-3 text-left">{selectedArtwork.description}</Card.Text>
            <Card.Text className='h4 text-left'>{Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP'}).format(selectedArtwork.price)}</Card.Text>
            <ButtonGroup className='mt-3'>
                <Button className="mx-2 bg-light text-dark" onClick={decrement}>-</Button>
                <h3 className="mx-1">{count}</h3>
                <Button className="mx-2 bg-light text-dark" onClick={increment}>+</Button>
                <Button variant="dark p-2" onClick={addingAmount}>Añadir <i class="fa-solid fa-cart-shopping"></i></Button>
            </ButtonGroup>
            </Col>
        </Row>
        </Container>
    )
}

export default Artwork;

