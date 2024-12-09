const express = require('express');
const app = express();
const PORT = 4000;

const loginRoute = require('./routes/login');

app.use(express.static('public'));

app.use(express.urlencoded({extended:false}));

app.use('/',loginRoute);





app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})