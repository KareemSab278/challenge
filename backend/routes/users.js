const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../config/config');

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const password_hash = await bcrypt.hash(password, 10);
    const payload = { username, email, password_hash };
    db.query('INSERT INTO users SET ?', payload, (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') return res.status(409).json({ error: 'User exists' });
        return res.status(500).json({ error: 'DB error' });
      }
      res.status(201).json({ id: result.insertId, username, email });
    });
  } catch (e) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, username], async (err, results) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    if (results.length === 0) return res.status(401).json({ error: 'Invalid credentials' });
    const user = results[0];
    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) return res.status(401).json({ error: 'Invalid credentials' });
    res.json({ id: user.id, username: user.username, email: user.email });
  });
});

module.exports = router;
