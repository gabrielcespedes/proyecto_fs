import React from 'react';
import {Card, Container, Row, Col } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup'
import UserCard from '../components/UserCard';

import { useContext } from "react";
import MyContext from "../my_context";

const UserViewBuyer = ({ user }) => {
    const { artistsInfo, artworks } = useContext(MyContext);
    const artistCollection = artworks.filter((element) => element.artist_id == user.user_id);

    console.log('Datos de usuario:', user);
    return (
        <Container className='d-flex align-items-center flex-column vh-100 mt-5 mb-3 pt-5'>
            <h2>Bienvenido, {user.username}</h2>

            <Container className='pt-3'>
                <h1 className="text-center h3">Obras</h1>
                <CardGroup>
                {
                    artistCollection.map((element, index) => (
                    <Card className="bg-light text-white p-2">
                        <Card.Img 
                        key={index}
                        variant="top"
                        className="artist-collection" 
                        src={element.url_image} />
                        <Card.ImgOverlay>
                        <Card.Title>{element.title}</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    ))
                }                
                </CardGroup>
                <Row>
                <Col xs={12} md={12}>
                    <UserCard user={user} />
                </Col>
                </Row>
            </Container>            
        </Container>
    );
};

export default UserViewBuyer;
