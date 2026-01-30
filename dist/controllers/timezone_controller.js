"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimezones = void 0;
const timezone_service_1 = require("../services/timezone_service");
const getTimezones = async (_req, res) => {
    try {
        const timezones = await (0, timezone_service_1.fetchTimezones)();
        res.json(timezones);
    }
    catch (error) {
        console.log("[timezone_controller - getTimezones ] : Failed to fetch timezones :" + error);
        res.status(500).json({ statusCode: 500, message: error?.message || error || 'Failed to fetch timezones' });
    }
};
exports.getTimezones = getTimezones;
