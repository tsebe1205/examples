const buttona = document.getElementById('but1');

const buttonb = document.getElementById('but2');

const counter = document.getElementById('count')

let count = 0;





function tochange() {
    count--;
    counter.innerText = count;

}

function tochange2() {
    count++;
    counter.innerText = count;


}




buttona.onclick = tochange;

buttonb.onclick = tochange2;