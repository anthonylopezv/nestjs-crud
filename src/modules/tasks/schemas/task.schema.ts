import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
    name: { type: String },
    description: String,
});