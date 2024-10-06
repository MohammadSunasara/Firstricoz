const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/', itemController.getAllItems);

router.get('/new', itemController.getNewItemForm);

router.post('/new', itemController.createNewItem);

router.get('/edit/:id', itemController.getEditItemForm);

router.post('/edit/:id', itemController.updateItem);

router.post('/delete/:id', itemController.deleteItem);

module.exports = router;
