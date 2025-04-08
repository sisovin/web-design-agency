import { useState, useEffect } from 'react';
import { fetchServices } from '../lib/apiClient';

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      const servicesList = await fetchServices();
      setServices(servicesList);
    };

    getServices();
  }, []);

  return services;
};

export default useServices;
