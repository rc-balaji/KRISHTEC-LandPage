import React, { useEffect, useState, useRef } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const images = [
  { id: 1, bg: 'bg-gradient-to-r from-yellow-400 to-pink-500' },
  { id: 2, bg: 'bg-gradient-to-r from-pink-400 to-blue-500' },
  { id: 3, bg: 'bg-gradient-to-r from-teal-300 to-green-500' },
  { id: 4, bg: 'bg-gradient-to-r from-blue-300 to-indigo-500' },
  { id: 5, bg: 'bg-gradient-to-r from-blue-400 to-teal-500' },
  { id: 6, bg: 'bg-gradient-to-r from-purple-300 to-blue-500' },
  { id: 7, bg: 'bg-gradient-to-r from-red-400 to-yellow-500' },
  { id: 8, bg: 'bg-gradient-to-r from-green-400 to-blue-500' },
];

const Carrousel = () => {
  const [rotateY, setRotateY] = useState(0);
  const isMouseDown = useRef(false);
  const lastMousePos = useRef(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleMouseMove = (e) => {
    if (isMouseDown.current) {
      const currentMousePos = e.clientX;
      const move = currentMousePos < lastMousePos.current ? rotateY - 2 : rotateY + 2;
      setRotateY(move);
      lastMousePos.current = currentMousePos;
    }
  };

  const handleMouseDown = () => {
    isMouseDown.current = true;
  };

  const handleMouseUp = () => {
    isMouseDown.current = false;
  };

  const handleMouseLeave = () => {
    isMouseDown.current = false;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave}>
      <div className="w-64 h-64 perspective">
        <div
          className="relative w-full h-full transform-style-preserve-3d transition-transform duration-500"
          style={{ transform: `rotateY(${rotateY}deg)` }}
          onMouseDown={handleMouseDown}
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`absolute w-full h-full rounded-lg flex items-center justify-center ${image.bg} opacity-50 hover:opacity-100`}
              style={{
                transform: `rotateY(${index * (360 / images.length)}deg) translateZ(200px)`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <button
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
        onClick={() => alert('Button Clicked')}
        data-aos="fade-up"
      >
        Click Me
      </button>
    </div>
  );
};

export default Carrousel;
