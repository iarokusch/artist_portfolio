import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Пул з'єднань з базою даних
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'new_schema',  // Використовуйте правильне ім'я бази даних
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export const addNewProject = async (req, res) => {
    const connection = await pool.getConnection();
    try {
        const { title, media, size, price, description, img } = req.body;

        // Записати проект в базу даних
        const [projectResult] = await connection.execute(
            'INSERT INTO projects (title, media, size, price, description) VALUES (?, ?, ?, ?, ?)',
            [title, media, size, price, description]
        );

        const projectId = projectResult.insertId;

        // Записати зображення в базу даних
        if (Array.isArray(img)) {
            for (const image of img) {
                await connection.execute(
                    'INSERT INTO images (project_id, filename, data, mime_type) VALUES (?, ?, ?, ?)',
                    [projectId, Date.now() + '_' + image.name, image.data, image.mimeType]
                );
            }
        } else if (img) {
            await connection.execute(
                'INSERT INTO images (project_id, filename, data, mime_type) VALUES (?, ?, ?, ?)',
                [projectId, Date.now() + '_' + img.name, img.data, img.mimeType]
            );
        }

        res.status(201).json({ success: true, data: { id: projectId, title, media, size, price, description } });
    } catch (error) {
        console.error('Error saving project:', error);
        res.status(500).json({ success: false, error: error.message });
    } finally {
        connection.release();
    }
};
export const getAllProjects = async (req, res) => {
    const connection = await pool.getConnection();
    try {
        const [projects] = await connection.execute('SELECT * FROM projects');

        for (const project of projects) {
            const [images] = await connection.execute('SELECT * FROM images WHERE project_id = ?', [project.id]);
            project.images = images.map(image => ({
                url: `http://localhost:3000/api/images/${image.filename}`,
                mimeType: image.mime_type
            }));
        }

        console.log('Projects with images:', projects); // Додати цю лінію для перевірки даних

        res.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ success: false, error: error.message });
    } finally {
        connection.release();
    }
};


