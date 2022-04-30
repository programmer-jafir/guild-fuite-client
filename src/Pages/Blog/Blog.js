import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <h1 className='mt-5 mb-3'>QA Section</h1>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between javascript and node js?</Accordion.Header>
                    <Accordion.Body>
                        Node .js is not a programming language. It is a cross platform open source server side Runtime environment. In facilitates JavaScript to be nun one a (server outside of the browser). Node.js can run on various platform- Windows, Linux, Mac OS etc. One the other hand, JavaScript is lightweight object oriented script language. It is used to build dynamic HTML page with interact effect on a web page, Mobile Applications, Games, Server Applications etc.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Differences between sql and nosql databases?</Accordion.Header>
                    <Accordion.Body>
                        SQL is generally used in Relational Database Management System. It is structured data can be stored in tables. The system are Static. Schemas are rigid and bound to relationships. Helpful to design complex queries. One the other hand, NoSQL is used in Non-relational, distributed database system. Using JSON data , un-structured data can be stored. The Schemas are Dynamic. Schemas are non-regrid, they are flexible. No interface to prepare complex query.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is the purpose of jwt and how does it work?</Accordion.Header>
                    <Accordion.Body>
                        JWT is just for authorization, not authentication. They're slightly different with authentication. What you're doing is you're taking in a username and a password and authenticating to make sure that username and password is correct. It's like logging a user in but authorization is actually making sure that the user that sends request to your server. Is the same user that actually logged in during the authentication process it's authorizing. That this user has access to this particular system and the access to this particular system and the way that this is normally done is by using session, so for example you have a session ID that you send down in the cookies of the browser and then every time the client makes your and then every
                        time the client makes your request they send that session ID up to the server and the server checks its memory says ok what user has that session ID it finds that user and then it does the authorization to make sure the user has access. But JWT instead of actually using these cookies it uses a JSON web token. Which is what JWT stands for to do the authorization.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;