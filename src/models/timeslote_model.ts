import pool from '../config/db';
import { Timeslot } from '../types';
import { ENV } from '../config/env';

export class TimeslotModel {
  static async findAll(): Promise<Timeslot[]> {
    const result = await pool.query(
      `SELECT * FROM ${ENV.TIMESLOT_DB_NAME}`
    );
    return result.rows;
  }
}
