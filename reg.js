const username = document.getElementById('username');

const password = document.getElementById('password');

const pass = document.getElementById('pas');

const btn = document.getElementById('button');



function onClick() {
    console.log(username.value)
    console.log(pass.value)
    console.log(password.value)
}




btn.onclick = onClick;


