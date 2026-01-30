"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeslots = void 0;
const timeslote_service_1 = require("../services/timeslote_service");
const getTimeslots = async (_req, res) => {
    try {
        const timeslots = await (0, timeslote_service_1.fetchTimeSlots)();
        res.json(timeslots);
    }
    catch (error) {
        console.log("[timeslot_controller - getTImeSlots ] : Failed to fetch timeslots :" + error);
        res.status(500).json({ statusCode: 500, message: error?.message || error || 'Failed to fetch timeslots' });
    }
};
exports.getTimeslots = getTimeslots;
