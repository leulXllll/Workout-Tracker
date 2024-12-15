const express = require('express');

const {handleLogin} = require('../Controller/authControllers.js');

const router = express.Router();

router.get('/',(req,res)=>{
    
    res.sendFile(__dirname,'public','index.html');
});

router.post('/login',handleLogin);


module.exports = router;