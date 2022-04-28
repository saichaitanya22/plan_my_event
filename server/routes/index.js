const express = require('express');

const router = express.Router();

console.log('router loaded');


router.use('/', require('./blogs'));
router.use('/', require('./users'));

// for any further routes, access from here
// router.use('/routerName', require('./router-file));


module.exports = router;