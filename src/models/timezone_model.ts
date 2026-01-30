import pool from '../config/db';
import { ENV } from '../config/env';
import { Timezone } from '../types';

export class TimezoneModel {
  static async findAll(): Promise<Timezone[]> {
    const result = await pool.query(
      `SELECT * FROM ${ENV.TIMEZONE_DB_NAME}`
    );
    return result.rows;
  }
}
