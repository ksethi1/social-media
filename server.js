const express = require('express');
const mongoose = require('mongoose');

const app = express();
//DB config
const db = require('./config/keys').mognoURI;

//Connect to mongoDB
mongoose.connect(db).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

// app.get('/', (req, res) => res.send('Hello hi'));
app.get('/', function (req,res) {
    res.send('Hello hi')
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));