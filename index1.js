// document.body.style.backgroundColor = ('green')

const btn = document.getElementById('btn');

const colorText = document.getElementById('color');

btn.onclick = clickhandler;

let generatedcolor = ``;



function colorgenerate() {

    return Math.round(Math.random() * 255);

}

function clickhandler() {
    generatedcolor = `rgb(${colorgenerate()}, ${colorgenerate()},${colorgenerate()})`
    document.body.style.backgroundColor = generatedcolor;
    colorText.innerText = generatedcolor;


}



