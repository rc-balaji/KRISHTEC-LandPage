import React, { useState } from "react";
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
  const [hoverIndex, setHoverIndex] = useState(null);

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
          {services.map((service, index) => (
            <Atropos
              key={index}
              className="my-atropos"
              activeOffset={40}
              shadow={true}
              shadowScale={1.3}
              highlight={true}
              onEnter={() => setHoverIndex(index)}
              onLeave={() => setHoverIndex(null)}
              onRotate={(x, y) => console.log("Rotate", x, y)}
            >
              <div
                style={{ border: '2px solid black' }}
                className={`relative p-6 shadow-md hover:bg-[#0D1B28] hover:shadow-lg hover:border-black hover:shadow-black`}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="group relative h-full w-full">
                  <div className="flex justify-center mb-4 h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-20 w-20 md:h-24 md:w-24 object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                  </div>
                  {hoverIndex === index && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-100 transition-opacity duration-300 rounded-lg">
                      <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-lg">{service.desc}</p>
                    </div>
                  )}
                </div>
              </div>
            </Atropos>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
