import { Request, Response } from 'express';
import { services } from '../schema/services';

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
