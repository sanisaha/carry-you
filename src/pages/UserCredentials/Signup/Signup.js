import React, { useContext } from 'react';
import { FaRegIdCard } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const Signup = () => {
    useTitle('Register')
    const { createUser, updateUserProfile, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                fetch('https://carry-you-server.vercel.app/jwt', {
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
                        handleUserProfile(name, photoURL);
                    });

            })
            .catch(e => console.error(e))

    }
    const handleUserProfile = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL };
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e))

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
                    <FaRegIdCard className='text-5xl' />
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-4/5  shadow-2xl bg-base-100">
                    <form onSubmit={handleRegistration} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">photoURL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Your photoURL" className="input input-bordered" />
                        </div>
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
                                <p>Already have an account? <Link to='/login' className='text-purple-700 font-semibold'>login</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6 text-center">
                            <input type="submit" className="btn btn-primary px-10" value='Register' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;