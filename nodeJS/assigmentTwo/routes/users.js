const path = require('path');
const express = require('express');

const routeDir = require('../helpers/path');
const router = express.Router();

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(routeDir, 'views', 'users.html'));
});

module.exports = router;