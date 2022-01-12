import { Schema } from "mongoose";
import { Mongoose } from "mongoose";
import { CarSchema } from "./Car";

export const JobSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    salary: { type: Number, required: true },
    hours: { type: String, required: true },
    location: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
},
    { timestamps: true, toJSON: { virtuals: true } }
)

JobSchema.virtual('creator'), {
    localField: 'creatorId',
    foreignField: '_id',
    ref: 'Profile',
    justOne: true
}