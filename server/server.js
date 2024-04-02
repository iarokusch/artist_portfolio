const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для обробки статичних файлів
app.use(express.static('public'));

// Маршрут для стартової сторінки
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Слухаємо запити на порті
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
