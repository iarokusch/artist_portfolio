import projectCollections from "../models/projectSchema.js";

export const getAllProjects = async (req, res) => {
    try {
        const allProjects = await projectCollections.find()
        res.json({ success: true, data: allProjects })
    } catch (error) {
        res.json(error)
    }
}


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
        const savedProject = await newProject.save();

        // Відправити успішну відповідь
        res.status(201).json({ success: true, data: savedProject });
    } catch (error) {
        // Відправити помилку, якщо щось пішло не так
        res.status(500).json({ success: false, error: error.message });
    }
};
