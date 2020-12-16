const express = require('express');

const router = express.Router();
// create a JSON data array
const data = [
    { id: 1, title: 'Create a project',  order: 1, completed: true, createdOn: new Date() },
    { id: 2, title: 'Take a cofféé',     order: 2, completed: true, createdOn: new Date() },
    { id: 3, title: 'Write new article', order: 3, completed: true, createdOn: new Date() },
    { id: 4, title: 'Walk toward home', order: 4, completed: false, createdOn: new Date() },
    { id: 5, title: 'Have some dinner', order: 5, completed: false, createdOn: new Date() },
];


router.get('/', function (req, res) {
    res.status(200).json(data);
});

// READ

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
    
    let itemIds = data.map(item => item.id);
   
    let orderNums = data.map(item => item.order);

  
    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
    
    let newOrderNum = orderNums.length > 0 ? Math.max.apply(Math, orderNums) + 1 : 1;

    
    let newItem = {
        id: newId, 
        title: req.body.title, 
        order: newOrderNum, 
        completed: false, 
        createdOn: new Date() 
    };

 
    data.push(newItem);

   
    res.status(201).json(newItem);
});



module.exports = router;