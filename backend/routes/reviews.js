const express = require('express');
const router = express.Router();
const db = require('../config/config');

router.post('/', (req, res) => {
  const { anime_id, user_id, review } = req.body;
  const payload = { anime_id, user_id, review };
  db.query('INSERT INTO reviews SET ?', payload, (err, result) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.status(201).json({ id: result.insertId, anime_id, user_id, review });
  });
});

router.get('/anime/:animeId', (req, res) => {
  const animeId = req.params.animeId;
  db.query('SELECT r.id, r.review, r.created_at, u.id AS user_id, u.username FROM reviews r JOIN users u ON r.user_id = u.id WHERE r.anime_id = ? ORDER BY r.created_at DESC', [animeId], (err, results) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json(results);
  });
});

module.exports = router;
