import express from 'express';
import mysql from 'mysql2/promise'; // Імпорт бібліотеки для роботи з MySQL
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/projectRoute.js';
import stream from 'stream';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

app.get('/api/images/:filename', async (req, res, next) => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        const [rows, fields] = await connection.execute('SELECT data FROM images WHERE filename = ?', [req.params.filename]);
        connection.end(); // Закриття з'єднання після виконання запиту
        if (rows.length === 0) {
            res.status(404).send('Image not found');
        } else {
            const readStream = stream.Readable.from(rows[0].data);
            readStream.pipe(res);
        }
    } catch (error) {
        console.error('Error retrieving image:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Сервер працює на порті ${PORT}`);
});
