import React from 'react';
import './Slide.css'; // Import the custom CSS file

const Slide = ({ imageUrl, heading, description, buttonText, buttonLink }) => (
  <div
    className="w-full h-full bg-cover bg-center flex items-center justify-center"
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    <div className="w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center p-8">
      <h1
        className="text-4xl md:text-5xl font-bold text-white mb-4 relative heading-underline text-center"
        data-aos="fade-right"
        data-aos-delay={400}
      >
        {heading}
      </h1>
      <p
        className="text-white mb-4 pb-2 text-center"
        data-aos="fade-left"
        data-aos-delay={1000}
      >
        {description}
      </p>
      <a
        href={buttonLink}
        className="glowing-button text-sm px-5 py-2.5 mb-2"
        data-aos="fade-up"
        data-aos-delay={1300}
      >
        {buttonText}
      </a>
    </div>
  </div>
);

export default Slide;
