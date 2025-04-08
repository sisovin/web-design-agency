import React, { useEffect, useState } from 'react';
import { fetchUserProjects, fetchUserServices } from '../../lib/apiClient';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userProjects = await fetchUserProjects();
      const userServices = await fetchUserServices();
      setProjects(userProjects);
      setServices(userServices);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User Dashboard</h1>
      <section>
        <h2>User Projects</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>User Services</h2>
        <ul>
          {services.map((service) => (
            <li key={service.id}>{service.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
