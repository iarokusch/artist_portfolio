
import { Schema, model } from 'mongoose';
const projectSchema = new Schema(
    {
        title: { type: String, required: true },
        media: { type: String },
        size: { type: String },
        price: { type: String },
        description: { type: String, required: true, uniue: true },
        img: [{ type: String, required: true }],
    },
    { versionKey: false }
);
const projectCollections = model('item', projectSchema);
export default projectCollections;