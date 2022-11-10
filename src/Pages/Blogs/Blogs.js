import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>1.Difference between SQL and NoSQL<br>
            </br>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL</h2>
            <h2>2.What is JWT, and how does it work?<br>
            </br>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</h2>
            <h2>3.What is the difference between javascript and NodeJS?<br>
            </br>Javascript is a programming language that is used for writing scripts on the website. NodeJS is a Javascript runtime environment.</h2>
            <h2>4.How does NodeJS handle multiple requests at the same time?<br>
            </br>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</h2>
        </div>
    );
};

export default Blogs;