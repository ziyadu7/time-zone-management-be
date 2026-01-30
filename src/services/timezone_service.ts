import { Timezone } from '../types';
import { TimezoneModel } from '../models/timezone_model';

export const fetchTimezones = async (): Promise<Timezone[]> => {
  return TimezoneModel.findAll();
};
