import { Pool } from 'pg';
import { ENV } from './env';

const pool = new Pool({
  host: ENV.DB_HOST ,
  port: Number(ENV.DB_PORT) ,
  user: ENV.DB_USER ,
  password: String(ENV.DB_PASSWORD) ,
  database: ENV.DB_NAME ,
});

pool.on('connect', () => {
  console.log('✅ Connected to PostgreSQL');
});

export default pool;
