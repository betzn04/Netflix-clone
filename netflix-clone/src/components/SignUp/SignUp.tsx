import { Link } from 'react-router-dom'
import './SignUp.css'
import { useState } from 'react'

export const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            setError('Invalid email format')
            return
        }

        // Password length validation
        if (password.length < 6) {
            setError('Password must be at least 6 characters long')
            return
        }

        // Password confirmation validation
        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }
    }

    return (
        <div className='signup-form'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type='password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        required
                    />
                </div>
                <button type='submit'>Sign Up</button>
            </form>
            <p className='auth-p'>
                Already have an account? <Link style={{color:'gray', textDecoration:'none'}} to="/signIn">Sign In</Link>
            </p>
        </div>
    )
}