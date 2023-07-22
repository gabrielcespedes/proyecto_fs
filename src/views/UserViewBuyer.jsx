import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UserCard from '../components/UserCard';

const UserViewBuyer = ({ user }) => {

    console.log('Datos de usuario:', user);
    return (
        <Container className='d-flex align-items-center flex-column vh-100 mt-5'>
            <h2>Bienvenido, {user.name}</h2>

            <Row>
                <Col xs={12} md={12}>
                    <UserCard user={user} />
                </Col>
            </Row>


        </Container>
    );
};

export default UserViewBuyer;
