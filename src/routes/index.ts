import { Router } from 'express';
import { getTimezones } from '../controllers/timezone_controller';
import { getTimeslots } from '../controllers/timeslot_controller';

const router = Router()

router.get('/timezones',getTimezones)
router.get('/timeslots',getTimeslots)

export default router