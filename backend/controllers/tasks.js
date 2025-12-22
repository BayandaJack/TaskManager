// require express for instance of express app
const express = require('express');
// require instance of express router
const router = express.Router();

// deal with different CRUD operations here
router.get('/', (req, res) => {
    res.send("Hi");
});

// export the router
module.exports = router;