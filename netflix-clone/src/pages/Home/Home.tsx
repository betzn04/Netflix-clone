import './Home.css';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
const navigate = useNavigate();

    return (
        <>
            <div className='home'>
                <div className='auth-links'>
                    <div className='home-text'>
                        <h1>Unlimited movies, TV shows and more</h1>
                        <h6>Starts at ₹149. Cancel at any time.</h6>
                    </div>
                    <div className='home-text'>
                        <h6 style={{ fontWeight: 'normal', marginBottom: '8px' }}>Ready to watch? Sign up or restart your membership.</h6>
                        <div className='auth-buttons'>
                            <button onClick={() => { navigate('/signIn') }}>Sign In</button>
                            <button onClick={() => { navigate('/signUp') }}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}