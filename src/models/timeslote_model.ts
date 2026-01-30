import pool from '../config/db';
import { Timeslot } from '../types';

export class TimeslotModel {
  static async findAll(): Promise<Timeslot[]> {
    const result = await pool.query(
      `SELECT * FROM ${process.env.TIMESLOT_DB_NAME}`
    );
    return result.rows;
  }
}
