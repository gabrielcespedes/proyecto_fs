import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const RegisterView = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // logica registro
        console.log('Nombre completo:', fullName);
        console.log('Email:', email);
        console.log('Contraseña:', password);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center flex-column ">
            <Form onSubmit={handleSubmit} className="p-1">
                <h5 className="mb-4">Registro de usuario</h5>
                <Form.Group className="mb-3" controlId="formFullName">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingresa tu nombre completo"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group  className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingresa tu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
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
                    Registrarse
                </Button>
            </Form>
        </Container>
    );
};

export default RegisterView;
