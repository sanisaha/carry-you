import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle, FaSignInAlt } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();
    const { providerLogin, signIn } = useContext(AuthContext)
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
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
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