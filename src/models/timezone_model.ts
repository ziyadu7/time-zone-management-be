import pool from '../config/db';
import { Timezone } from '../types';

export class TimezoneModel {
  static async findAll(): Promise<Timezone[]> {
    const result = await pool.query(
      `SELECT * FROM ${process.env.TIMEZONE_DB_NAME}`
    );
    return result.rows;
  }
}
