const path = require('path');
const express = require('express');

const routeDir = require('../helpers/path');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(routeDir, 'views', 'home.html'));
});

module.exports = router;