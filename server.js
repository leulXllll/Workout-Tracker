const express = require('express');
const app = express();
const PORT = 4000;
const {connectToDatabase} = require('./Model/Customer.model');
const {verifyAuth} = require('./Controller/authControllers');
const loginRoute = require('./routes/login');
const jwt = require('jsonwebtoken');

require('dotenv').config();

app.use(express.static('public'));

app.use(express.urlencoded({extended:false}));

app.use(express.json());


// app.get('/')
// verifyAuth,
app.get('/protected',(req,res)=>{
            
    const token = req.headers['authorization'].substring(7);

    let decoded = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);

    console.log(`decoded obj is ${JSON.stringify(decoded)}`);

    res.send({"protected route":"hit"});

});
app.use('/',loginRoute);




async function startServer(params) {
    await connectToDatabase();
    app.listen(PORT,()=>{
        console.log(`server listening on port ${PORT}`)
    });
}

startServer();