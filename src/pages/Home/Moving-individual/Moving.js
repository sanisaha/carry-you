import React from 'react';
import { Link } from 'react-router-dom';

const Moving = () => {
    return (
        <div className="hero min-h-screen bg-base-200 my-10">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://www.wecaremovers.net/_nuxt/img/2.c37cd5c.jpg" alt='' className="rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">A reliable Moving Service</h1>
                    <p className="py-6">{`It’s no secret that moving can be a stressful task,
                     and CarryYou are here to help you with managing your relocation stress.
                      You can count on our movers to guide you
                       through the process, door to door.`}</p>
                    <Link><button className="btn btn-primary">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Moving;