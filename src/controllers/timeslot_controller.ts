import { Request, Response } from 'express';
import { fetchTimeSlots } from '../services/timeslote_service';

export const getTimeslots = async (_req: Request, res: Response) => {
    try {
        const timeslots = await fetchTimeSlots();
        res.json(timeslots);
    } catch (error) {
        console.log("[timeslot_controller - getTImeSlots ] : Failed to fetch timeslots :" + error)
        res.status(500).json({ statusCode: 500, message: (error as Error)?.message || error || 'Failed to fetch timeslots' });
    }
};
