import React, { useEffect, useState } from 'react';
import { fetchProjects, fetchServices } from '../../lib/apiClient';

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const projectsData = await fetchProjects();
      setProjects(projectsData);
    };

    const getServices = async () => {
      const servicesData = await fetchServices();
      setServices(servicesData);
    };

    getProjects();
    getServices();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <section>
        <h2>Projects</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Services</h2>
        <ul>
          {services.map((service) => (
            <li key={service.id}>{service.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;
