import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div>
        <h1>About this app</h1>
        <p>
          This is a MERN Stack Contacts Manager App. On the Back-End it is built
          using: Node, Express, JWT, Express-Validator, MongoDB and Mongoose.
          Front-End is created using React (Hooks and Context Api).
        </p>
        <div className='badge bg-light rrg'>
          <p className='text-left'>
            Created by{" "}
            <a
              href='https://www.rohangautam.com.np'
              target='_blank'
              rel='noopener noreferrer'
            >
              Rohan Gautam
            </a>
          </p>
          <p className='text-right'>
            View this project on{" "}
            <a
              href='https://github.com/RohanRajGautam/contact-keeper'
              target='_blank'
              rel='noopener noreferrer'
            >
              my Github
            </a>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
