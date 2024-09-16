// Ваш серверний код (app.js або server.js)
import express from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import multer from 'multer';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'new_schema',  // Використовуйте правильне ім'я бази даних
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const upload = multer({ storage: multer.memoryStorage() });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Додавання нового проекту
app.post('/api/projects', upload.array('images'), async (req, res) => {
    const connection = await pool.getConnection();
    try {
        const { title, media, size, price, description } = req.body;
        const images = req.files;

        // Записати проект в базу даних
        const [projectResult] = await connection.execute(
            'INSERT INTO projects (title, media, size, price, description) VALUES (?, ?, ?, ?, ?)',
            [title, media, size, price, description]
        );

        const projectId = projectResult.insertId;

        // Записати зображення в базу даних
        if (images && images.length > 0) {
            for (const image of images) {
                await connection.execute(
                    'INSERT INTO images (project_id, filename, data, mime_type) VALUES (?, ?, ?, ?)',
                    [projectId, image.originalname, image.buffer, image.mimetype]
                );
            }
        }

        res.status(201).json({ success: true, data: { id: projectId, title, media, size, price, description } });
    } catch (error) {
        console.error('Error saving project:', error);
        res.status(500).json({ success: false, error: error.message });
    } finally {
        connection.release();
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
