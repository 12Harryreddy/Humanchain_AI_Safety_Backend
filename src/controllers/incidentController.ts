import { Request, Response, NextFunction } from 'express';
import * as IncidentService from '../services/incident.service';
import { validateIncidentInput } from '../utils/validation';

export const getAllIncidents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const incidents = await IncidentService.getAll();
    res.json(incidents);
  } catch (err) {
    next(err);
  }
};

export const getIncidentById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const incident = await IncidentService.getById(id);
    if (!incident) {
       res.status(404).json({ message: 'Incident not found' });
       return;
    }
    res.json(incident);
  } catch (err) {
    next(err);
  }
};

export const createIncident = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error } = validateIncidentInput(req.body);
    if (error) {
      res.status(400).json({ message: error });
      return;
    }
    const newIncident = await IncidentService.create(req.body);
    res.status(201).json(newIncident);
  } catch (err) {
    next(err);
  }
};

export const deleteIncident = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const deleted = await IncidentService.deleteById(id);
    if (!deleted) {
      res.status(404).json({ message: 'Incident not found' });
      return;
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
