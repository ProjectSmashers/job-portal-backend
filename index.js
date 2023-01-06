
const candidates = require('./routes/candidates');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/candidates', candidates);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));