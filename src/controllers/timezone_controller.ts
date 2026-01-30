import { Request, Response } from 'express';
import { fetchTimezones } from '../services/timezone_service';

export const getTimezones = async (_req: Request, res: Response) => {
    try {
        const timezones = await fetchTimezones();
        res.json(timezones);
    } catch (error) {
        console.log("[timezone_controller - getTimezones ] : Failed to fetch timezones :" + error)
        res.status(500).json({ statusCode: 500, message: (error as Error)?.message || error || 'Failed to fetch timezones' });
    }
};
