const express = require('express');
const app = express();
const PORT = 4000;
const {connectToDatabase} = require('./Model/Customer.model');
const loginRoute = require('./routes/login');

app.use(express.static('public'));

app.use(express.urlencoded({extended:false}));

app.use(express.json());


// app.get('/')

app.use('/',loginRoute);




async function startServer(params) {
    await connectToDatabase();
    app.listen(PORT,()=>{
        console.log(`server listening on port ${PORT}`)
    });
}

startServer();