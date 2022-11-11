import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle, FaSignInAlt } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const Login = () => {
    useTitle('Login')
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();
    const { providerLogin, signIn, loading } = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                fetch('https://carry-you-server-sanisaha.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('carryYou-token', data.token)
                        navigate(from, { replace: true });
                    });
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
    }
    if (loading) {
        return (<div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>)
    }
    return (
        <div className="hero w-4/5 mx-auto bg-base-200 pb-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/5 mr-20">
                    <FaSignInAlt className='text-5xl' />
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-4/5  shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p>Dont't have an account? <Link to='/register' className='text-purple-700 font-semibold'>register</Link></p>
                            </label>
                        </div>
                        <div className='text-center'>
                            <p className='text-red-500'>{error}</p>
                        </div>
                        <div className="form-control mt-6 text-center">
                            <input type="submit" className="btn btn-primary px-10" value='Login' />
                        </div>
                        <div>
                            <h2 className='text-center'>OR</h2>
                            <Link onClick={handleGoogleSignIn} className="btn btn-accent w-full"
                                role="button">
                                <FaGoogle className='me-2' />Google login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;