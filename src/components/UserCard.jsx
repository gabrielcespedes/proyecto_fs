import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import OrderItem from './OrderItem';
import CommentItem from './CommentItem';

const UserCard = ({ user }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
                {/* Mostrar otros datos del usuario */}
                {/* Por ejemplo, puedes mostrar el saldo, dirección, etc. */}
            </Card.Body>
            <ListGroup variant="flush">
                {user.orders && user.orders.length > 0 ? (
                    <ListGroup.Item>
                        <h4>Pedidos</h4>
                        {user.orders.map((order) => (
                            <OrderItem key={order.id} order={order} />
                        ))}
                    </ListGroup.Item>
                ) : (
                    <ListGroup.Item>No hay pedidos disponibles</ListGroup.Item>
                )}

                {user.comments && user.comments.length > 0 ? (
                    <ListGroup.Item>
                        <h4>Comentarios/Calificaciones</h4>
                        {user.comments.map((comment) => (
                            <CommentItem key={comment.id} comment={comment} />
                        ))}
                    </ListGroup.Item>
                ) : (
                    <ListGroup.Item>No hay comentarios/calificaciones disponibles</ListGroup.Item>
                )}
            </ListGroup>
        </Card>
    );
};

export default UserCard;
