import React, { useState } from 'react';
import './Login.css'; // Same CSS file for styling
import {Link} from 'react-router-dom'

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Call your login API here (for now just log the details)
        console.log('User logged in:', { email, password });

        // Example error check (you can customize this based on actual login failure)
        if (email === '' || password === '') {
            setError('Please fill in both fields.');
        } else {
            setError('');
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                {error && <p className="error">{error}</p>}
                <div className="auth-field">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="auth-field">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit" className="auth-button">Login</button>
            </form>
            <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </div>
    );
};

export default LoginPage;
