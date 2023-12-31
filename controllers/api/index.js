const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

// All routes and controllers written for an open API; catering to different view implementations.
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
