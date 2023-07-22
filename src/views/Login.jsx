import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserViewBuyer from './UserViewBuyer';


const LoginView = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Agregar aquí la lógica para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de inicio de sesión
        console.log('Email:', email);
        console.log('Password:', password);

        // Ejemplo de usuarios
        const userData = {/* 
            name: 'John Doe',
            email: 'johndoe@example.com',
            orders: [
                {
                    id: 1,
                    date: '2023-07-18',
                    status: 'Enviado',
                    total: 50.0,
                },
            ], */
        };
        setIsLoggedIn(true);
        setUser(userData);
    };

    return isLoggedIn ? (
        <UserViewBuyer user={user} />
    ) : (
        <Container className="d-flex justify-content-center align-items-center flex-column vh-100">
            <h5 className="mb-3">Inicia Sesión</h5>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingresa tu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button className="mb-3" variant="primary" type="submit">
                    Iniciar Sesión
                </Button>
            </Form>
        </Container>
    );
};


export default LoginView;
