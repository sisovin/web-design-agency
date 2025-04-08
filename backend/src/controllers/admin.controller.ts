import { Request, Response } from 'express';
import { projects } from '../schema/projects';
import { services } from '../schema/services';

export const getProjects = async (req: Request, res: Response) => {
  try {
    const allProjects = await projects.findAll();
    res.status(200).json({ projects: allProjects });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, clientId, startDate, endDate, status, budget, projectManager, teamMembers } = req.body;

  try {
    const updatedProject = await projects.update(
      { id },
      {
        name,
        description,
        clientId,
        startDate,
        endDate,
        status,
        budget,
        projectManager,
        teamMembers,
      }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json({ project: updatedProject });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedProject = await projects.delete({ id });

    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getServices = async (req: Request, res: Response) => {
  try {
    const allServices = await services.findAll();
    res.status(200).json({ services: allServices });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateService = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, price, duration, category } = req.body;

  try {
    const updatedService = await services.update(
      { id },
      {
        name,
        description,
        price,
        duration,
        category,
      }
    );

    if (!updatedService) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.status(200).json({ service: updatedService });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteService = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedService = await services.delete({ id });

    if (!deletedService) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
