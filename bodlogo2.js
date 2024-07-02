const dup = [3, 1, 1, 1, 2, 2] //[1,2]

let s = [];

for (let i = 0; i < dup.length; i++) {
    if (dup[i] !== dup[i - 1]) {

        s.push(dup[i]);
    }

}
console.log(s);