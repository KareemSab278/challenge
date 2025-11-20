const express = require('express');
const cors = require("cors");
const db = require('./config/config');
const { errorHandler } = require('./middleware/middleware');

const app = express();

app.use(express.json());

const PORT = 5000;
const allowedOrigins = [
  "http://localhost:5173",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use('/api', require('./routes/routes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
