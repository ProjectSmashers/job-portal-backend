const candidates = require('./routes/candidates');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const express = require('express');
dotenv.config({path : './config/config.env'});
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api/candidates', candidates);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));