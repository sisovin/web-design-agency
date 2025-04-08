import React, { useEffect, useState } from 'react';
import { fetchServices } from '../../hooks/useServices';

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      const servicesList = await fetchServices();
      setServices(servicesList);
    };

    getServices();
  }, []);

  return (
    <div>
      <h1>Public Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>{service.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesPage;
