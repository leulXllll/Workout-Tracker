// const { default: axios } = require("axios");

let form = document.querySelector('form');

let userName = document.getElementById('username');
let passWord = document.getElementById('password');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    axios.post('/login',{username:userName.value , password:passWord.value}).

    then(response => {
        const token =  response.data.access_token;

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        

    })
    .catch(error => {
        console.error('Login failed:', error);
    });
})

const btn = document.getElementById('nn');

btn.addEventListener('click',()=>{
   
    console.log('axios request is about to be made');

    axios.get('/protected').
    then(res=>{
        console.log(res);
    })
    .catch(e=>{
        console.log(e.message)
    })

});