// import required essentials
const express = require('express');
// create new router
const router = express.Router();
// create a JSON data array

const data=[
    { id: 1, title: 'Create a project',  order: 1, completed: true, createdOn: new Date() },
    { id: 2, title: 'Take a cofféé',     order: 2, completed: true, createdOn: new Date() },
    { id: 3, title: 'Write new article', order: 3, completed: true, createdOn: new Date() },
    { id: 4, title: 'Walk toward home', order: 4, completed: false, createdOn: new Date() },
    { id: 5, title: 'Have some dinner', order: 5, completed: false, createdOn: new Date() },
];


router.get('/', function (req, res) {
    res.status(200).json(data);
});

router.get('/:id', function (req, res) {
   
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

// CREATE

router.post('/', function (req, res) {
    // get itemIds from data array
    let itemIds = data.map(item => item.id);

    
    
    // create an object of new Item
    let newItem = {
        id: newId, // generated in above step
        firstName: req.body.firstName, 
        lastName: req.body.lastName, 
        company: req.body.company, 
        
    };

    // push new item object to data array of items
    data.push(newItem);

    
    res.status(201).json(newItem);
});




module.exports = router;
