import { Schema, model } from 'mongoose';

const imgSchema = new Schema(
    {
        filename: { type: String, },
        data: { type: Buffer, }, // Зберігаємо дані зображення у вигляді буфера
    },
    { timestamps: true }
);

const imgCollection = model('image', imgSchema);

export default imgCollection;
