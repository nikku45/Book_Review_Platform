require('dotenv').config();
const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const UserRoute = require('./Routes/UserRoute');
const BookRoute=require('./Routes/BookRoute');
const ProfileRoute = require('./Routes/ProfileRoute');
const ReviewRoute = require('./Routes/ReviewRoute');
const cors = require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());





app.use('/user',UserRoute);
app.use('/book',BookRoute);
app.use('/user/profile', ProfileRoute);
app.use('/review', ReviewRoute);


app.get('/',(req, res) => {
    res.send('Welcome to the backend server');
});
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});

connectDB();

