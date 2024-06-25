import React, { useEffect } from 'react';
import LiquidSwipe from 'react-liquidswipe';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from './img1.png';
import img2 from './img3.png';
import './Slide.css'; // Import the custom CSS file
import Slide from './Slide.jsx'; // Import the Slide component

const contentArray = [
  {
    imageUrl: img1,
    heading: 'LORA LORAWAN',
    description: 'Crafted by innovative creators for electronics. Research Innovate and Implement.',
    buttonText: 'Get Started',
    buttonLink: '#about',
  },
  {
    imageUrl: img2,
    heading: 'IOT INDUSTRY 5.0',
    description: 'Industrial people looking 5.0 project text us',
    buttonText: 'Get Started',
    buttonLink: '#about',
  },
];

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); 

  const components = contentArray.map((content, index) => (
    <Slide
      key={index}
      imageUrl={content.imageUrl}
      heading={content.heading}
      description={content.description}
      buttonText={content.buttonText}
      buttonLink={content.buttonLink}
      reverse={index % 2 === 1}
    />
  ));

  return (
    <section id="home" className="h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden" data-aos="fade-up">
      <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
        <LiquidSwipe
          components={components}
          style={{
            height: '100%',
            width: '100%',
          }}
        />
      </div>
    </section>
  );
}

export default Home;
