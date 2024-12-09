const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    
    res.sendFile(__dirname,'public','index.html');
});

router.post('/login',(req,res)=>{
    res.send(req.body);
})


module.exports = router;