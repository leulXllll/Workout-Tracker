const {connectToDatabase,registerToDatabase,checkPassword} = require('../Model/Customer.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const handleLogin = (req,res,)=>{

    const {username,password} = req.body;

    console.log(` the username requested is ${username} the password req is ${password} `);

    let isCorrect = checkPassword(username,password);

        isCorrect.
        then(response=>{
            if(response){

                const payload = {
                    username : username,
                    exp:Math.floor(Date.now() / 1000) + (60 * 60)
                }
                let access_token = jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET);

                res.send({access_token});
                // let verify = jwt.verify(JWT,process.env.ACCESS_TOKEN_SECRET);

                // console.log(verify)
            }else{
                res.status(404);
            }

        }).
        catch(e=>{
            console.log(e)
        })

   
}

module.exports = {handleLogin};

