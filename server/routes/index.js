const express = require('express');

const router = express.Router();

console.log('router loaded');


router.use('/', require('./blog.routes'));
router.use('/', require('./user.routes'));
router.use('/', require('./admin.routes'));
router.use('/', require('./vendor.routes'));

// for any further routes, access from here
// router.use('/routerName', require('./router-file));


module.exports = router;