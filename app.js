const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Default route
app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.listen(port, ()=>{
    console.log(`Running on port http://localhost:${port}`)
})