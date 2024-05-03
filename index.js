const express = require('express');
const cors = require('cors');
const app = express();
const landingPage = require('./routes/landingPage');


app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for all routes
app.set('view engine', 'ejs');
// Setup routes

app.use('/', landingPage);

app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${process.env.PORT} on 0.0.0.0`);
});
