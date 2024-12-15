const pg = require('pg');
require('dotenv').config();
const {Client} = pg;

const client = new Client({
    user:'postgres',
    password:process.env.PASSWORD,
    database:'workout',
    host:'localhost',
});

async function connectToDatabase(params) {
    try{
        await client.connect();
    
    }catch(e){
        console.log(`error connecting to database , ${e.message}`);
    }
}

async function registerToDatabase(firstname,lastname,password,username) {
    let Query = `INSERT INTO CUSTOMER(firstname,lastname,password,username) VALUES ($1,$2,$3,$4)`;
    let customer = [firstname,lastname,password,username];
    try{

        await client.query(Query,customer);
    }catch(e){
        console.log(e);
    }
}

async function checkPassword(username,password) {
    try{

        let Query = `SELECT username,password FROM CUSTOMER WHERE username=$1 and password=$2;`

        let values = [username,password];

        let returned = await client.query(Query,values);

        if(returned.rows[0]){
            return true;
        }else{
            throw new WrongPasswordException('The password is Wrong ');
        }
      

    }catch(e){
            console.log(`the msg is ${e.message}`);
            console.log(`the name is ${e.name}`);
            return false;

    }
}
module.exports = {registerToDatabase,connectToDatabase,checkPassword}