
let form = document.querySelector('form');

let userName = document.getElementById('username');
let passWord = document.getElementById('password');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    axios.post('/login',{username:userName.value , password:passWord.value}).
    then(response => {
        console.log('Login successful', response.data);
    })
    .catch(error => {
        console.error('Login failed:', error);
    });
})