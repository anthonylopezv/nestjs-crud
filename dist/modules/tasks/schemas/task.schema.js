"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.TaskSchema = new mongoose.Schema({
    name: { type: String },
    description: String,
});
//# sourceMappingURL=task.schema.js.map