const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');

//Body Parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
//DB config
const db = require('./config/keys').mognoURI;

//Connect to mongoDB
mongoose.connect(db).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

// app.get('/', (req, res) => res.send('Hello hi'));
app.get('/', function (req,res) {
    res.send('Hello hi')
});


//Use routes
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));