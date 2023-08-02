import React, { useState } from 'react';
import {Card, Container} from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup'
import UserCard from '../components/UserCard';

import { useContext } from "react";
import MyContext from "../my_context";

const UserViewBuyer = ({ user }) => {
    const { artistsInfo, artworks, setArtworks } = useContext(MyContext);
    const artistCollection = artworks.filter((element) => element.seller_id == user.user_id);

    const [input_title, setInput_title] = useState('');
    const [input_description, setInput_description] = useState('');
    const [input_price, setInput_price] = useState(0);
    const [input_url_image, setInput_url_image] = useState('');

    const handleInput_title = (e) => {
        setInput_title(e.target.value);
    }
    const handleInput_description = (e) => {
        setInput_description(e.target.value);
    }
    const handleInput_price = (e) => {
        const value = Number(e.target.value);
        if (!isNaN(value)) {
            setInput_price(value);
        } else {
            setInput_price(0);
        }        
    }
    const handleInput_url_image = (e) => {
        setInput_url_image(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setArtworks([...artworks, {product_id: artworks.length + 1, title: input_title, description: input_description, price: input_price, url_image: input_url_image, seller_id: user.user_id, amount: 0}])
        setInput_title('');
        setInput_description('');
        setInput_price(0);
        setInput_url_image('');
    }

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
                <Card className='mt-5 mb-5 text-center'>
                    <h2>Agregar Obra</h2>
                    <form onSubmit={handleSubmit}>
                        <input className='form-control' placeholder='Ingresa el nombre de la obra' onChange={handleInput_title} value={input_title}></input>
                        <br></br>
                        <input className='form-control' placeholder='Descripción' onChange={handleInput_description} value={input_description}></input>
                        <br></br>
                        <label className='label-left'>Valor:</label>
                        <input className='form-control' placeholder='Valor' onChange={handleInput_price} value={input_price}></input>
                        <br></br>
                        <input className='form-control' placeholder='url imagen' onChange={handleInput_url_image} value={input_url_image}></input>
                        <br></br>
                        <button className='btn btn-dark mb-2'>Agregar obra</button>
                    </form>
                    {console.log(artworks)}
                </Card>
                {/* Para implementarlo a futuro*/}
                {/* <Row>
                <Col xs={12} md={12}>
                    <UserCard user={user} />
                </Col>
                </Row> */}
            </Container>            
        </Container>
    );
};

export default UserViewBuyer;
