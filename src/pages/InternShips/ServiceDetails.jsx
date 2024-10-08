import React, { useContext, useEffect } from "react";
 // Import useHistory from react-router-dom
import "aos/dist/aos.css";
import AOS from "aos";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./style.css";
import M2M from './assets/M2M.png';
import { useParams } from "react-router-dom";
import { NavigationContext } from "../../NavigationContext";

// Initialize Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

// Sample images array
const url =
  "https://docs.google.com/forms/d/e/1FAIpQLSepHZtuzmGbU6nIEb9pq8xUS3-RZdOi_76L5le_XHISeRYn7A/viewform";
const images = [
  {
    id: 1,
    title: "M2M",
    url: M2M,
    link: url,
  },
  {
    id: 2,
    title: "LORA",
    url: "https://via.placeholder.com/400/00FF00/FFFFFF?Text=Image2",
    link: url,
  },
  {
    id: 3,
    title: "IOT",
    url: "https://via.placeholder.com/400/0000FF/FFFFFF?Text=Image3",
    link: url,
  },
  {
    id: 4,
    title: "ADAS",
    url: "https://via.placeholder.com/400/FFFF00/FFFFFF?Text=Image4",
    link: url,
  },
  {
    id: 5,
    title: "OBD",
    url: "https://via.placeholder.com/400/FF00FF/FFFFFF?Text=Image5",
    link: url,
  },
  {
    id: 6,
    title: "EMI/EMC",
    url: "https://via.placeholder.com/400/00FFFF/FFFFFF?Text=Image6",
    link: url,
  },
  {
    id: 7,
    title: "LIDAR",
    url: "https://via.placeholder.com/400/FF0000/FFFFFF?Text=Image7",
    link: url,
  },
  {
    id: 8,
    title: "LDO",
    url: "https://via.placeholder.com/400/00FF00/FFFFFF?Text=Image8",
    link: url,
  },
];


function ServicesInternShip() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="contact" className="mt-20 h-screen flex flex-col items-center justify-center bg-cover bg-center" data-aos="fade-up">
      <h2 className="text-3xl mb-4">Service Details</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true, // Enable dynamic bullets
        }}
        className="mySwiper"
        loop={true} // Enable loop for continuous scrolling
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="relative reflection overflow-visible">
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={image.url}
                  alt={image.title}
                  className="transform transition duration-500 ease-in-out w-full h-auto max-h-96 object-contain hover:scale-110"
                />
              </a>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                <p className="text-sm">{image.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
function ServicesTraining() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="contact" className="mt-20 h-screen flex flex-col items-center justify-center bg-cover bg-center" data-aos="fade-up">
      <h2 className="text-3xl mb-4">Training Details</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true, // Enable dynamic bullets
        }}
        className="mySwiper"
        loop={true} // Enable loop for continuous scrolling
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="relative reflection overflow-visible">
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={image.url}
                  alt={image.title}
                  className="transform transition duration-500 ease-in-out w-full h-auto max-h-96 object-contain hover:scale-110"
                />
              </a>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                <p className="text-sm">{image.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}


const Services = () => {


  const { setCurrentPage } = useContext(NavigationContext);

  useEffect(() => {

    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
    setCurrentPage("services")
  }, []); 
  const {serviceId} = useParams(); 

  
  switch(serviceId){
    case 'internship':
      return <>
        <ServicesInternShip/>
      </>
      case 'training':
        return <>
          <ServicesTraining/>
        </>
  }
}


export default Services;
