const express = require('express');
const router = express.Router();
const db = require('../config/config');

router.get('/', (req, res) => { // localhost:5000/api/anime
    try {
        db.query('SELECT id, title, description, release_year, episodes, created_at FROM anime ORDER BY created_at DESC', (err, results) => {
            if (err) {
                console.error('DB Error:', err);
                return res.status(500).json({ error: 'DB error' });
            }
            res.json(results);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }

});

router.get('/:id', (req, res) => { // localhost:5000/api/anime/:id
    const id = req.params.id;
    db.query('SELECT id, title, description, release_year, episodes, created_at FROM anime WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'DB error' });
        if (results.length === 0) return res.status(404).json({ error: 'Not found' });
        res.json(results[0]);
    });
});

router.post('/', (req, res) => { // localhost:5000/api/anime
    try {
        const { title, description, release_year, episodes, cover_image } = req.body;
        const payload = { title, description, release_year, episodes, cover_image };
        db.query('INSERT INTO anime SET ?', payload, (err, result) => {
            if (err) throw err;
            res.status(201).json({ id: result.insertId, ...payload });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    db.query('UPDATE anime SET ? WHERE id = ?', [changes, id], (err) => {
        if (err) return res.status(500).json({ error: 'DB error' });
        res.json({ id: Number(id), ...changes });
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM anime WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ error: 'DB error' });
        res.status(204).end();
    });
});

module.exports = router;
