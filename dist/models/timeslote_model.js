"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeslotModel = void 0;
const db_1 = __importDefault(require("../config/db"));
class TimeslotModel {
    static async findAll() {
        const result = await db_1.default.query(`SELECT * FROM ${process.env.TIMESLOT_DB_NAME}`);
        return result.rows;
    }
}
exports.TimeslotModel = TimeslotModel;
