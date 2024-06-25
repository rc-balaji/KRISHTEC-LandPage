import React from 'react';
import './Slide.css';

const Slide = ({ imageUrl, heading, description, buttonText, buttonLink, showBlackOverlay }) => (
  <div
    className="w-full h-full  bg-cover bg-center flex items-center"
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    <div className={`w-full mt-0 ml-4 h-full ${showBlackOverlay ? 'bg-black bg-opacity-50' : ''} flex flex-col items-start justify-center p-8`}>
      <div className="text-left max-w-2xl">
        <h1
          className="text-4xl md:text-5xl font-bold text-white mb-4 relative heading-underline"
          data-aos="fade-right"
          data-aos-delay={400}
        >
          {heading}
        </h1>
        <p
          className="text-white mb-4 pb-2 w-[350px]"
          data-aos="fade-left"
          data-aos-delay={1000}
        >
          {description}
        </p>
        <a
          href={buttonLink}
          className="glowing-button text-sm  mt-24"
          data-aos="fade-up"
          data-aos-delay={1300}
        >
          {buttonText}
        </a>
      </div>
    </div>
  </div>
);

export default Slide;
