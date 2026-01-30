export interface Timezone {
  id: string;
  name: string;
  offset: number;
}

export interface Timeslot {
  id: number;
  utc_time: string;
}
