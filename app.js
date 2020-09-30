const express = require('express');
const app = express();


// Default route
app.use((req, res, next) => {
    res.json({
        message: 'You are using V1 of the Storim API'
    })
    next();
});

module.exports = app;