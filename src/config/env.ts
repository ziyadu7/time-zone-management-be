import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 8081 ,
  TIMESLOT_DB_NAME: process.env.TIMESLOT_DB_NAME || '',
  TIMEZONE_DB_NAME: process.env.TIMEZONE_DB_NAME || '',
  DB_HOST: process.env.DB_HOST|| '',
  DB_PORT: process.env.DB_PORT|| '',
  DB_USER: process.env.DB_USER|| '',
  DB_PASSWORD: process.env.DB_PASSWORD|| '',
  DB_NAME: process.env.DB_NAME|| '',
};