
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const PORT =3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));


mongoose.connect('mongodb://127.0.0.1:27017/firstricoz')
  .then(() => console.log('Connected!'));



app.use('/', itemRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
