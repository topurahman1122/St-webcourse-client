import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='px-4 py-16 col-span-9 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
                    <div className="card w-96 bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title"> Difference between SQL and NoSQL</h2>
                            <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-info text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title"> What is JWT, and how does it work?</h2>
                            <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>

                        </div>
                    </div>
                    <div className="card w-96 bg-secondary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">  What is the difference between javascript and NodeJS?</h2>
                            <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title"> How does NodeJS handle multiple requests at the same time?</h2>
                            <p>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                                <br />
                                <br />
                                <span className='font-bold'> Working of Node.js:</span> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;