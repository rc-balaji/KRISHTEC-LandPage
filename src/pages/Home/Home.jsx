import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './animations.css'; // Import custom CSS animations

const contentArray = [
  {
    imageUrl: 'https://cafetele.com/wp-content/uploads/2020/05/NOBKA-compressor-1536x1037.jpg',
    heading: 'LORA LORAWAN',
    description: 'Crafted by innovative creators for electronics. Research Innovate and Implement.',
    buttonText: 'Get Started',
    buttonLink: '#about',
  },
  {
    imageUrl: 'https://www.amarinfotech.com/wp-content/uploads/2018/02/IOT-home-automation-projects.jpg',
    heading: 'IOT INDUSTRY 5.0',
    description: 'Industrial people looking 5.0 project text us',
    buttonText: 'Get Started',
    buttonLink: '#about',
  },
];

const TransitionComponent = forwardRef(({ imageUrl, children, ...props }, ref) => (
  <CSSTransition nodeRef={ref} {...props}>
    <div ref={ref} className="w-full h-full bg-center bg-cover" style={{ backgroundImage: `url(${imageUrl})` }}>
      {children}
    </div>
  </CSSTransition>
));

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContent, setShowContent] = useState(true);
  const [direction, setDirection] = useState('right');
  const intervalRef = useRef(null);
  const nodeRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      handleNextClick();
    }, 5000);
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    startInterval();
  };

  const handlePrevClick = () => {
    setDirection('left');
    setShowContent(false);
    resetInterval();
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? contentArray.length - 1 : prevIndex - 1));
    }, 500); // wait for the exit animation to complete
    setTimeout(() => {
      setShowContent(true);
    }, 600); // wait a bit more to ensure smooth transition
  };

  const handleNextClick = () => {
    setDirection('right');
    setShowContent(false);
    resetInterval();
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === contentArray.length - 1 ? 0 : prevIndex + 1));
    }, 500); // wait for the exit animation to complete
    setTimeout(() => {
      setShowContent(true);
    }, 600); // wait a bit more to ensure smooth transition
  };

  const { imageUrl, heading, description, buttonText, buttonLink } = contentArray[currentIndex];

  return (
    <section id="home" className="h-screen mt-20 flex flex-col md:flex-row items-center justify-center bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: `url(${imageUrl})` }} data-aos="fade-up">
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button onClick={handlePrevClick} className="bg-white text-gray-800 text-l rounded-full p-2 shadow-md focus:outline-none">
          ⬅️
        </button>
      </div>
      <TransitionGroup className="w-full md:w-1/2 h-full">
        {showContent && (
          <TransitionComponent
            key={imageUrl}
            timeout={500}
            classNames={{
              enter: direction === 'right' ? 'fade-right-to-left-enter' : 'fade-left-to-right-enter',
              enterActive: direction === 'right' ? 'fade-right-to-left-enter-active' : 'fade-left-to-right-enter-active',
              exit: direction === 'right' ? 'fade-right-to-left-exit' : 'fade-left-to-right-exit',
              exitActive: direction === 'right' ? 'fade-right-to-left-exit-active' : 'fade-left-to-right-exit-active',
            }}
            imageUrl={imageUrl}
            ref={nodeRef}
          />
        )}
      </TransitionGroup>
      <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center p-8 md:p-16 bg-white bg-opacity-80">
        <TransitionGroup>
          {showContent && (
            <CSSTransition
              key={heading}
              timeout={500}
              classNames="text-animation"
              nodeRef={nodeRef}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4" data-aos="fade-right">
                {heading}
              </h1>
            </CSSTransition>
          )}
        </TransitionGroup>
        <TransitionGroup>
          {showContent && (
            <CSSTransition
              key={description}
              timeout={500}
              classNames="text-animation"
              nodeRef={nodeRef}
            >
              <p className="text-gray-600 text-center mb-4 pb-2" data-aos="fade-left">
                {description}
              </p>
            </CSSTransition>
          )}
        </TransitionGroup>
        <TransitionGroup>
          {showContent && (
            <CSSTransition
              key={buttonText}
              timeout={500}
              classNames="text-animation"
              nodeRef={nodeRef}
            >
              <a href={buttonLink} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" data-aos="fade-up">
                {buttonText}
              </a>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button onClick={handleNextClick} className="bg-white text-gray-800 rounded-full p-2 shadow-md focus:outline-none">
          ➡️
        </button>
      </div>
    </section>
  );
}

export default Home;
