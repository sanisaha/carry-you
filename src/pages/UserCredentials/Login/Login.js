import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
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
                        <div className="form-control mt-6 text-center">
                            <Link to='/register'><button className="btn btn-primary px-10">Log In</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;