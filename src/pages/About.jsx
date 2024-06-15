import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import video from "./cube.mp4";
import Services from './Services/Services';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-200 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8" data-aos="fade-up">About Us</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="md:w-1/2 px-4 md:px-0" data-aos="fade-right">
            <a href={video} target="_blank" rel="noopener noreferrer">
              <video className="w-full rounded-lg shadow-lg" autoPlay loop muted playsInline>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </a>
          </div>
          <div className="md:w-1/2 px-4 md:px-0" data-aos="fade-left">
            <div className="text-left">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">We will provide you the best work which you dreamt for!</h3>
              <ul className="list-none text-gray-600 leading-relaxed mb-4">
                <li className="flex items-start mb-2">
                  <span className="text-lg mr-2">⚡</span>
                  KRISHTEC was started in 2014 with an intention to create Industry-Academic relationships. Selected as one among tens of startups in IISF 2017, held at Chennai.
                </li>
                <li className="flex items-start mb-2">
                  <span className="text-lg mr-2">⚡</span>
                  Now we are stepping into our 10th year. We offer high-quality products with technical advancements as per the demands of industries.
                </li>
                <li className="flex items-start mb-2">
                  <span className="text-lg mr-2">⚡</span>
                  KRISHTEC offers various services, from design/testing to research and development of new electronic products based on client requirements.
                </li>
                <li className="flex items-start mb-2">
                  <span className="text-lg mr-2">⚡</span>
                  We specialize in product development for ML, WSN, IoT, M2M, ADAS, and LoRA.
                </li>
                <li className="flex items-start mb-2">
                  <span className="text-lg mr-2">⚡</span>
                  In addition to product development, we design courses for autonomous and deemed institutions. We offer one-credit courses in IoT, Machine Learning, and Data Science.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function App() {
  return (
    <div>
      <About />
      <Services />
    </div>
  );
}

export default App;
