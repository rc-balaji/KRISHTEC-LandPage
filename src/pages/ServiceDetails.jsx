import React from 'react';
import { useParams } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

function ServiceDetails() {
  const { serviceId } = useParams();
  return (
    <section id="contact" className="h-screen flex items-center justify-center bg-cover bg-center" data-aos="fade-up">
      <h2 className="text-3xl mb-4">Service Det</h2>
    </section>
  );
}

export default ServiceDetails;
