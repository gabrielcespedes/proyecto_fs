import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const LoginView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Agregar aquí la lógica para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de inicio de sesión
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center flex-column ">
            <h5 className="mb-3">Inicia Sesion</h5>
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
