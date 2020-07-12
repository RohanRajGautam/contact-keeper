import React from "react";

const Footer = () => {
  return (
    <>
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
    </>
  );
};

export default Footer;
