const express = require('express');
const db = require('./config/config');
const { errorHandler } = require('./middleware/middleware');

const app = express();

app.use(express.json());

app.use('/api', require('./routes/routes'));

app.use(errorHandler);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
