require('dotenv').config();
const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const UserRoute = require('./Routes/UserRoute');
const BookRoute=require('./Routes/BookRoute');
const ProfileRoute = require('./Routes/ProfileRoute');
const ReviewRoute = require('./Routes/ReviewRoute');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));






app.use('/user',UserRoute);
app.use('/book',BookRoute);
app.use('/user/profile', ProfileRoute);
app.use('/book', ReviewRoute);


app.get('/',(req, res) => {
    res.send('Welcome to the backend server');
});


connectDB();
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
