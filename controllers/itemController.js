const Item = require('../models/item');


exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.render('index', { items });
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
};


exports.getNewItemForm = (req, res) => {
    res.render('new');
};

exports.createNewItem = async (req, res) => {
    const { name, description } = req.body;
    try {
        const newItem = new Item({ name, description });
        await newItem.save();
        res.redirect('/');
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
};


exports.getEditItemForm = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        res.render('edit', { item });
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
};

exports.updateItem = async (req, res) => {
    const { name, description } = req.body;
    try {
        await Item.findByIdAndUpdate(req.params.id, { name, description });
        res.redirect('/');
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
};


exports.deleteItem = async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
};
