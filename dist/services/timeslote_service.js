"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTimeSlots = void 0;
const timeslote_model_1 = require("../models/timeslote_model");
const fetchTimeSlots = async () => {
    return timeslote_model_1.TimeslotModel.findAll();
};
exports.fetchTimeSlots = fetchTimeSlots;
