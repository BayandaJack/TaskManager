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

// post a task
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

// update contents of a task
router.patch('/post/:id', async (req, res) => {
    // first find the task
    const postId = req.params.id;

    // destructure contents of req body
    const { content, completed } = req.body;

    // find the task by id
    try {
        const task = await Tasks.findByPk(postId);

        // update the task details
        task.content = content;
        task.completed = completed;

        // save changes to task object
        await task.save();

        res.status(200).json({message: "Updated task successfully!"});
        
    } catch (error) {

        res.status(400).json({message: error});
        
    }

});

// delete a specific task
router.delete('/post/:id', async (req, res) => {
    // get id of task
    const postID = req.params.id;

    try {
        // find & retrieve task in database
        const task = await Tasks.findByPk(postID);

        // remove task from db
        task.destroy();

        res.status(200).json({message: "Sucessfully deleted the task!"});

        
    } catch (error) {

        res.status(400).json({message: error});
        
    }

});

// export the router
module.exports = router;