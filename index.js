const candidates = require('./routes/candidates');
const company = require('./routes/company');
const preset = require('./routes/preset')

const dotenv = require('dotenv');
const connectDB = require('./config/db')
const express = require('express');
dotenv.config({ path: './config/config.env' });
const app = express();

connectDB();

app.use(express.json());


app.use(express.urlencoded({ extended: true }));


app.use('/api/candidates', candidates);
app.use('/api/company',company);
app.use('/api/preset',preset);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));