const express = require('express');
const router = express.Router()
const Model = require('../models/models.js');

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        // console.log(data)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    // console.log(req.params.id)
    let id = req.params.id
    try{
        const data = await Model.findById({ _id: id});
        // console.log("data:", data.images)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = router;