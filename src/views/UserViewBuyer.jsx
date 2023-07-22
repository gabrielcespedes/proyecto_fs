import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UserCard from '../components/UserCard';
import OrderItem from '../components/OrderItem';
import CommentItem from '../components/CommentItem';

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

            <Row>
                <Col xs={12}>
                    {user.orders && user.orders.length > 0 ? (
                        <>
                            <h4>Pedidos</h4>
                            {user.orders.map((order) => (
                                <OrderItem key={order.id} order={order} />
                            ))}
                        </>
                    ) : (
                        <p>No hay pedidos disponibles</p>
                    )}
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    {user.comments && user.comments.length > 0 ? (
                        <>
                            <h4>Comentarios/Calificaciones</h4>
                            {user.comments.map((comment) => (
                                <CommentItem key={comment.id} comment={comment} />
                            ))}
                        </>
                    ) : (
                        <p>No hay comentarios/calificaciones disponibles</p>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default UserViewBuyer;
