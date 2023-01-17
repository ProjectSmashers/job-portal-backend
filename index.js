const candidates = require('./routes/candidates');

const dotenv = require('dotenv');
const connectDB = require('./config/db')
const express = require('express');
const routerCompany = require('./routes/company');
dotenv.config({ path: './config/config.env' });
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/candidates', candidates);
app.use('/api/company', routerCompany);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));