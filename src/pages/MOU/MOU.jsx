import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import img from './image.png';
import KIT from './assets/KIT.png';
import VCE from './assets/VCE.png';
import BEC from './assets/BEC.png';
import GEC from './assets/GEC.png';
import SEC from './assets/SEC.png';
import KEC from './assets/KCE.png';

const MOU = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const partnershipData = [
    {
      name: "KIT- Kalaignarkarunanidhi Institute of Technology, Coimbatore.",
      url: "https://kitcbe.com/",
      image: KIT 
    },
    {
      name: "Vivekanandha College of Engineering for Women, Tiruchengode.",
      url: "http://vcenggw.ac.in/",
      image: VCE 
    },
    {
      name: "Vivekanandha College of Technology for Women, Tiruchengode.",
      url: "http://vcenggw.ac.in/",
      image: VCE 
    },
    {
      name: "Builders Engineering College, Nathakadaiyur",
      url: "https://builderscollege.edu.in/mou/",
      image: BEC 
    },
    {
      name: "Government Engineering College, Dharmapuri.",
      url: "http://www.gcedpi.edu.in/",
      image: GEC 
    },
    {
      name: "Sengunthar Engineering College, Tiruchengode.",
      url: "http://scteng.co.in/",
      image: SEC 
    },
    {
      name: "Karpagam College of Engineering, Coimbatore.",
      url: "https://kce.ac.in/profile/",
      image: KEC 
    },
  ];

  return (
    <section id="mou" className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-12">
        <h2 className="text-4xl text-center mt-24 font-bold mb-8 text-gray-800" data-aos="fade-up">Memorandum of Understanding</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div data-aos="fade-right">
            <img src={img} alt="Partnership Image" className="mx-auto rounded-lg shadow-lg md:max-h-full" />
          </div>

          <div className="overflow-y-auto h-[800px]">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {partnershipData.map((partner, index) => (
                <a key={index} href={partner.url} target="_blank" rel="noopener noreferrer" className="block">
               
                    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 flex items-center space-x-4 cursor-pointer transition duration-300 hover:bg-gray-200">
                      <img src={partner.image} alt={partner.name} className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full shadow-lg" />
                      <div>
                        <h5 className="md:text-l font-bold text-gray-800">{partner.name}</h5>
                      </div>
                   
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MOU;
