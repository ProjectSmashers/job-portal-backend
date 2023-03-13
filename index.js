const routercandidates = require("./routes/candidates");
const routerCompany = require("./routes/company");
const routerpreset = require("./routes/preset");
const routerInterested =  require('./routes/interested')
const routerJob = require('./routes/job')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')


const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const connectDB = require("./config/db");
connectDB();

const express = require("express");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


app.use(session({
    secret: process.env.JWT_PRIVATE_KEY,
    resave: false,
    saveUninitialized: true
}));

app.use("/api/candidates", routercandidates);
app.use("/api/company", routerCompany);
app.use("/api/preset", routerpreset);
app.use("/api/interstedcandidate", routerInterested);
app.use("/api/job",routerJob);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
