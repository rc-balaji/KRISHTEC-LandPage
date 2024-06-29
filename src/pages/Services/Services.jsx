import React from "react";
import img1 from "./assets/1img.png";
import img2 from "./assets/2img.png";
import img3 from "./assets/3img.png";
import img4 from "./assets/4img.png";
import img5 from "./assets/5img.png";
import img6 from "./assets/6img.png";
import img7 from "./assets/7img.png";
import Atropos from "atropos/react";
import "./style.css";

function Services() {
  

  const services = [
    {
      image: img1,
      title: "Robotics",
      desc: "LeGo robotics, M2M robo.",
      shadowColor: "rgba(98, 0, 234, 0.5)",
    },
    {
      image: img2,
      title: "Elaboration Of The Core",
      desc: "We are here for upgrading your skills.",
      shadowColor: "rgba(234, 98, 0, 0.5)",
    },
    {
      image: img3,
      title: "Industry Offered OCC",
      desc: "OCC for Academic Institutes.",
      shadowColor: "rgba(0, 234, 98, 0.5)",
    },
    {
      image: img4,
      title: "IoT",
      desc: "Solution provider using Azure IoT, V4.0, Online Monitoring, ML, LoRa.",
      shadowColor: "rgba(0, 98, 234, 0.5)",
    },
    {
      image: img5,
      title: "Modern Technology",
      desc: "DAS, RAS, Iv4.0, IoT, M2M, LoRa, LoRaWAN.",
      shadowColor: "rgba(234, 0, 98, 0.5)",
    },
    {
      image: img6,
      title: "Testing For Perfection",
      desc: "Circuit Testing",
      shadowColor: "rgba(234, 234, 0, 0.5)",
    },
    {
      image: img7,
      title: "Led Screen Displays",
      desc: "Wonderful Indoor And Outdoor Screens...",
      shadowColor: "rgba(0, 234, 234, 0.5)",
    },
  ];

  return (
    <section
      id="services"
      className="mt-0 min-h-screen flex items-center justify-center bg-cover bg-center bg-gray-100 py-8"
      style={{ backgroundColor: '#e0f7fa' }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-8"
          data-aos="fade-up"
        >
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return <div key={index} >
                <Atropos
              key={service.id} // Assuming service.id or another unique identifier is available
              className="my-atropos"
              activeOffset={40}
              shadow={true}
              shadowScale={1.3}
              highlight={true}
              onEnter={() => console.log("Enter")}
              onLeave={() => console.log("Leave")}
              onRotate={(x, y) => console.log("Rotate", x, y)}
            >
              <div
                className="bg-white p-6 rounded-lg shadow-lg relative"
                data-aos="fade-up"
                data-aos-delay={index * 200}
                style={{ "--shadow-color": service.shadowColor }} // Correct inline style syntax
              >
                <div className="group">
                  <div className="flex justify-center mb-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-20 w-20 md:h-24 md:w-24 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="absolute inset-0 z-10 text-2xl flex items-center justify-center transition-opacity duration-300 opacity-0 bg-gradient-to-r from-green-400 to-blue-500 pointer-events-none group-hover:opacity-100">
                    {service.desc}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-lg"></div>
                </div>
              </div>
            </Atropos>
            </div>
            
            
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
