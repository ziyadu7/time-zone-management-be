import { Timeslot } from '../types';
import { TimeslotModel } from '../models/timeslote_model';

export const fetchTimeSlots = async (): Promise<Timeslot[]> => {
  return TimeslotModel.findAll();
};
