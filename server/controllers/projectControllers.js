import projectCollections from "../models/projectSchema.js";
import imgCollection from "../models/imgSchema.js"; // Імпорт моделі для зображень

export const addNewProject = async (req, res) => {
    try {
        // Отримати дані нового проекту з запиту
        const { title, media, size, price, description, img } = req.body;

        // Створити новий об'єкт проекту
        const newProject = new projectCollections({
            title,
            media,
            size,
            price,
            description,
            img
        });

        // Зберегти новий проект у базі даних
        await newProject.save();

        // Зберегти зображення в колекцію
        if (Array.isArray(img)) {
            for (const image of img) {
                await imgCollection.create({
                    filename: Date.now() + '_' + image.name,
                    data: image.data,
                });
                // newProject.img.push(newImage.filename);
            }
        } else {
            await imgCollection.create({
                filename: Date.now() + 'img',
                // data: img.data,
            });
            // newProject.img.push(newImage.filename);
        }

        // Зберегти оновлену версію проекту з посиланнями на зображення
        const updatedProject = await newProject.save();

        res.status(201).json({ success: true, data: updatedProject });
    } catch (error) {
        // Відправити помилку, якщо щось пішло не так
        console.error('Error saving project:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};
export const getAllProjects = async (req, res) => {
    try {
        const allProjects = await projectCollections.find().toArray(); // Конвертуємо курсор у масив

        res.json(allProjects); // Повертаємо просто масив проектів
    } catch (error) {
        res.status(500).json({ success: false, error: error.message }); // Повертаємо помилку зі статусом 500
    }
};
