const express = require('express');

const router = express.Router();

console.log('Router Loaded');


router.use('/blog', require('./blog.routes'));
router.use('/user', require('./user.routes'));
router.use('/admin', require('./admin.routes'));
router.use('/vendor', require('./vendor.routes'));

// for any further routes, access from here
// router.use('/routerName', require('./router-file));


module.exports = router;