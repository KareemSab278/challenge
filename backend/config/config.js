require('dotenv').config();

const mysql = require("mysql2");

let configuration = {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "anime_spot"
};

const db = mysql.createConnection(configuration);



db.connect((err) => {
  if (err) {
    console.error('DB connection failed:', err);
  } else {
    console.log('DB connected successfully');
  }
});

module.exports = db;