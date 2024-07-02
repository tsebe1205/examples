const box = document.getElementsByClassName('name')



box[0].style.background = 'red'
const colors = ['red', 'green', 'blue', 'black', 'yellow',]

for (let i = 0; i < colors.length; i++) {
    if (box[i] == colors[i]) {
        box[i].style.background = colors[i]
    }


}