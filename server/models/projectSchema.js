
import { Schema, model } from 'mongoose';
const projectSchema = new Schema(
    {
        title: { type: String, },
        media: { type: String },
        size: { type: String },
        price: { type: String },
        description: { type: String },
        // img: [{ type: String }],
    },
    { versionKey: false }
);
const projectCollections = model('itemis', projectSchema);
export default projectCollections;