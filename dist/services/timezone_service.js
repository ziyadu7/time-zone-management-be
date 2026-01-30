"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTimezones = void 0;
const timezone_model_1 = require("../models/timezone_model");
const fetchTimezones = async () => {
    return timezone_model_1.TimezoneModel.findAll();
};
exports.fetchTimezones = fetchTimezones;
