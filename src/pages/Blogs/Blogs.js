import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {
    useTitle('Blog');
    return (
        <div className='px-5'>
            <div className="container bg-black border border-dark px-5">
                <div>
                    <h2 className="text-white font-bold my-4 py-4 text-3xl">Important questions and their answers regarding Reactjs and backend database</h2>
                </div>
                <div>
                    <div className="border border-dark text-white p-4">
                        <div>
                            <h3 className="font-bold text-xl">1.Difference between SQL and NoSQL</h3>
                            <li><p className='text-lg'>SQL databases are relational databases. This means that data is organized into tables, and each table has a specific structure. Tables are connected to each other through relationships. This makes SQL databases very powerful for storing data that needs to be accessed in a particular way.</p></li>
                            <li><p className='text-lg'>NoSQL databases are non-relational databases. This means that data is stored in a collection of documents. There is no specific structure to these documents, and they are not connected to each other through relationships. So, they are more suitable for storing data that does not need to be accessed in a particular manner</p></li>
                            <li><p className='text-lg'></p>One main difference between SQL and NoSQL databases is how they scale. SQL databases use a vertical scaling approach, meaning they scale by adding more power to the server. NoSQL databases use a horizontal scaling approach, meaning they scale by adding more servers.</li>
                        </div>
                    </div>
                    <div className="border border-dark text-white p-4">
                        <div>
                            <h3 className="font-bold text-xl">2.What is JWT, and how does it work?</h3>
                            <p className='text-lg'>JWT is an open standard security token that transmits information securely as a JSON object, useful for authorization and information exchange. It contains all essential information about an entity, meaning that no database queries are necessary, and the session doesn’t need to be saved on the server. You can sign the token using a private secret or a public/private key. Its short messages can be encrypted and securely convey the identity of the sender and whether they have the necessary access rights.
                            </p>
                        </div>
                    </div>
                    <div className="border border-dark text-white p-4">
                        <div>
                            <h3 className="font-bold text-xl">3.What is the difference between javascript and NodeJS?</h3>
                            <p className='text-lg'>
                                <li><p className='text-lg'>Javascript is a programming language that is used for writing scripts on the website.while NodeJS is a Javascript runtime environment.</p></li>
                                <li><p className='text-lg'>Javascript can only be run in the browsers.We can run Javascript outside the browser with the help of NodeJS.</p></li>
                                <li><p className='text-lg'>Javascript is capable enough to add HTML and play with the DOM. Nodejs does not have capability to add HTML tags.</p></li>
                            </p>


                        </div>
                    </div>
                    <div className="border border-dark text-white p-4">
                        <div>
                            <h3 className="font-bold text-xl">4.How does NodeJS handle multiple requests at the same time?</h3>
                            <p className='text-lg'>
                                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;