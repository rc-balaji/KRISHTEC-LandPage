import React from 'react';
import './Slide.css'; // Import the custom CSS file

const Slide = ({ imageUrl, heading, description, buttonText, buttonLink, reverse }) => (
  <div className={`w-full h-full bg-[#C9E8FF] flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center p-8`}>
    <div className="w-full md:w-1/2 p-4 flex justify-center" data-aos="zoom-in" data-aos-delay={100} >
      <img src={imageUrl} alt="Slide Image" className="border-4 border-white rounded-lg shadow-md animate-float max-w-md md:max-w-lg lg:max-w-xl" />
    </div>
    <div className="w-full md:w-1/2 text-center md:text-left p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative heading-underline" data-aos="fade-right" data-aos-delay={400} >
        {heading}
      </h1>
      <p className="text-white mb-4 pb-2" data-aos="fade-left" data-aos-delay={1000} >
        {description}
      </p>
      <a href={buttonLink} className="glowing-button text-sm px-5 py-2.5 mb-2" data-aos="fade-up" data-aos-delay={1300} >
        {buttonText}
      </a>
    </div>
  </div>
);

export default Slide;
