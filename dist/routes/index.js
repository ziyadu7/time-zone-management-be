"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const timezone_controller_1 = require("../controllers/timezone_controller");
const timeslot_controller_1 = require("../controllers/timeslot_controller");
const router = (0, express_1.Router)();
router.get('/timezones', timezone_controller_1.getTimezones);
router.get('/timeslots', timeslot_controller_1.getTimeslots);
exports.default = router;
