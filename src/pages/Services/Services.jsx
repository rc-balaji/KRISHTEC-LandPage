import React from 'react';
import img1 from "./assets/1img.jpg"
import img2 from "./assets/2img.jpg"
import img3 from "./assets/3img.jpg"
import img4 from "./assets/4img.jpg"
import img5 from "./assets/5img.jpg"
import img6 from "./assets/6img.jpg"

function Services() {
  return (
    <section id="services" className="mt-0 min-h-screen flex items-center justify-center bg-cover bg-center bg-gray-100 py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8" data-aos="fade-up">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg relative"
            data-aos="fade-up"
            onMouseEnter={(e) => {
              e.currentTarget.classList.add('shadow-2xl');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove('shadow-2xl');
            }}
          >
            <div className="group">
              <div className="flex justify-center mb-4">
                <img
                  src={img1} // Replace with your image source
                  alt="Robotics"
                  className="h-20 w-20 md:h-24 md:w-24 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Robotics</h3>
              {/* Description on hover */}
              <p className="absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-gradient-to-r from-green-400 to-blue-500 pointer-events-none group-hover:opacity-100">
              LeGo robotics, M2M robo.
              </p>
              {/* Colorful glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-lg"></div>
              </div>
          </div>

          {/* Service 2 */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg relative"
            data-aos="fade-up"
            data-aos-delay="100"
            onMouseEnter={(e) => {
              e.currentTarget.classList.add('shadow-2xl');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove('shadow-2xl');
            }}
          >
            <div className="group">
              <div className="flex justify-center mb-4">
                <img
                  src={img2} // Replace with your image source
                  alt="Service 2"
                  className="h-20 w-20 md:h-24 md:w-24 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Elaboration Of The Core</h3>
              {/* Description on hover */}
              <p className="absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-gradient-to-r from-green-400 to-blue-500 pointer-events-none group-hover:opacity-100">
              We are here for upgrading your skills.
              </p>
              {/* Colorful glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>
          </div>

          {/* Service 3 */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg relative"
            data-aos="fade-up"
            data-aos-delay="200"
            onMouseEnter={(e) => {
              e.currentTarget.classList.add('shadow-2xl');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove('shadow-2xl');
            }}
          >
            <div className="group">
              <div className="flex justify-center mb-4">
                <img
                  src={img3} // Replace with your image source
                  alt="Service 3"
                  className="h-20 w-20 md:h-24 md:w-24 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Industry Offered OCC</h3>
              {/* Description on hover */}
              <p className="absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-gradient-to-r from-green-400 to-blue-500 pointer-events-none group-hover:opacity-100">
              OCC for Academic Institutes.
              </p>
              {/* Colorful glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>
          </div>

          {/* Service 4 */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg relative"
            data-aos="fade-up"
            data-aos-delay="300"
            onMouseEnter={(e) => {
              e.currentTarget.classList.add('shadow-2xl');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove('shadow-2xl');
            }}
          >
            <div className="group">
              <div className="flex justify-center mb-4">
                <img
                  src={img4} // Replace with your image source
                  alt="Service 4"
                  className="h-20 w-20 md:h-24 md:w-24 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">IoT</h3>
              {/* Description on hover */}
              <p className="absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-gradient-to-r from-green-400 to-blue-500 pointer-events-none group-hover:opacity-100">
              Solution provider using Azure IoT, V4.0, Online Monitoring, ML , LoRa.
              </p>
              {/* Colorful glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>
          </div>

          {/* Service 5 */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg relative"
            data-aos="fade-up"
            data-aos-delay="400"
            onMouseEnter={(e) => {
              e.currentTarget.classList.add('shadow-2xl');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove('shadow-2xl');
            }}
          >
            <div className="group">
              <div className="flex justify-center mb-4">
                <img
                  src={img5} // Replace with your image source
                  alt="Service 5"
                  className="h-20 w-20 md:h-24 md:w-24 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Modern Technology</h3>
              {/* Description on hover */}
              <p className="absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-gradient-to-r from-green-400 to-blue-500 pointer-events-none group-hover:opacity-100">
              DAS, RAS, Iv4.0,IoT, M2M,LoRa,LoRaWAN.
              </p>
              {/* Colorful glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>
          </div>

          {/* Service 6 */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg relative"
            data-aos="fade-up"
            data-aos-delay="500"
            onMouseEnter={(e) => {
              e.currentTarget.classList.add('shadow-2xl');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove('shadow-2xl');
            }}
          >
            <div className="group">
              <div className="flex justify-center mb-4">
                <img
                  src={img6} // Replace with your image source
                  alt="Service 6"
                  className="h-20 w-20 md:h-24 md:w-24 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Testing For Perfection</h3>
              {/* Description on hover */}
              <p className="absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-gradient-to-r from-green-400 to-blue-500 pointer-events-none group-hover:opacity-100">
              Circuit Testing
              </p>
              {/* Colorful glowing effect*/}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>
          </div>
          {/* Service 7 */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg relative"
            data-aos="fade-up"
            data-aos-delay="500"
            onMouseEnter={(e) => {
              e.currentTarget.classList.add('shadow-2xl');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove('shadow-2xl');
            }}
          >
            <div className="group">
              <div className="flex justify-center mb-4">
                <img
                  src={img6} // Replace with your image source
                  alt="Service 6"
                  className="h-20 w-20 md:h-24 md:w-24 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Led Screen Displays</h3>
              {/* Description on hover */}
              <p className="absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-gradient-to-r from-green-400 to-blue-500 pointer-events-none group-hover:opacity-100">
              Wonderfull Indoor And Outdoor Screens...
              </p>
              {/* Colorful glowing effect*/}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

