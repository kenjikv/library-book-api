const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();
const db = require('../database/db'); 

router.get('/books', verifyToken, (req, res) => {
    let sql = 'SELECT * FROM book';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

module.exports = router;