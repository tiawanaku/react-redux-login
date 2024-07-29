// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { Form, Button, Container } from 'react-bootstrap';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Verifica las credenciales y asigna el rol correspondiente
    if (username === 'admin' && password === 'admin123') {
      dispatch(login({ user: { username }, role: 'mercedario' })); // Rol 'mercedario' para admin
    } else if (username === 'user' && password === 'user') {
      dispatch(login({ user: { username }, role: 'ingavi' })); // Rol 'ingavi' para user
    }
    // No se maneja ningún mensaje de error
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Login</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={handleLogin} className="w-100">
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;


