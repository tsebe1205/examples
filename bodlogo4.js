const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const arr2 = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'Ө', 'П', 'Р', 'С', 'Т', 'У', 'Ү', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];



for (let i = 0; i < arr2.length; i++) {
    let numb = i + 1
    console.log(arr2[i], numb);

}

function AlphabetPrint(Alphabet) {
    for (let i = 0; i < arr2.length; i++) {
        let numb = i + 1
        if (Alphabet == numb) {
            console.log(arr2[i]);
        }
        if (Alphabet == arr2[i]) {
            console.log(numb);
        }
    }
}
AlphabetPrint('2')



