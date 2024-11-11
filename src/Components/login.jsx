// src/Components/login.jsx
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './database.jsx';
import "./login.css";

const Login = ({ setIsAdmin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log('Login form submitted');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setIsAdmin(true);
            navigate('/admin');
        } catch (error) {
            console.error('Login failed', error);
            setError('Login failed. Please check your email and password.');
        }
    };

    return (
        <form onSubmit={handleLogin} className='formContent'>
            <h1 className='adminTitle'>Admin Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
            <input
                className='inputBox'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                className='inputBox'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login; // Ensure this line is present