import React from 'react';
import { useParams } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

function ServiceDetails() {
  const { serviceId } = useParams();
  return (
    <div className="p-10 text-center" data-aos="fade-up">
      <h2 className="text-3xl mb-4">Service: {serviceId}</h2>
      <p>Details about the service {serviceId}.</p>
    </div>
  );
}

export default ServiceDetails;
