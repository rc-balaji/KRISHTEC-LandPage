import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ServiceDetails() {
  const { serviceId } = useParams();
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); 
  return (
    <section id="contact" className="h-screen flex items-center justify-center bg-cover bg-center" data-aos="fade-up">
      <h2 className="text-3xl mb-4">Product Details</h2>
    </section>
  );
}

export default ServiceDetails;
