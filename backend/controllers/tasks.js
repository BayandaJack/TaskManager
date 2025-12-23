// require express for instance of express app
const express = require('express');
// require instance of express router
const router = express.Router();
// import database
const db = require('../models');
// define user and task variables
const Users = db.Users;
const Tasks = db.Tasks;

// deal with different CRUD operations here

// get all posts
router.get('/', async (req, res) => {
    // Need to run a SELECT Query
    try {
        const tasks = await Tasks.findAll();

        res.status(200).json(tasks);

    } catch (error) {

        res.status(404).json({message: "No tasks found!"});
        
    }

});

// get one specific post
router.get('/:id', async (req, res) => {
    // extract id from req params
    const postID = req.params.id;

    try {
        //use findOne function on Tasks
        const task = await Tasks.findByPk(postID);

        res.status(200).json(task);
        
    } catch (error) {

        res.status(400).json({message: error});

    }

    
});



router.post('/post', async (req, res) => {
    //extract body from req
    const { content, completed } = req.body;

    try {
        //Need to run an INSERT Query
        const user = await Tasks.create({ 
            content: content, 
            completed: completed 
        });

        res.status(200).json({message: "Successfully added new task!"});
        
    } catch (error) {
        res.status(400).json({message: error});
    }
});

router.put('/post/:id', async (req, res) => {
    // first find the task
    const postId = req.params.id;

    const task = await Tasks.findOne({
        where: {
            id: postId
        }
    })

    res.send("You're making an update to a post");
});

router.delete('/post/:id', (req, res) => {
    res.send("You want to delete a post");
});

// export the router
module.exports = router;