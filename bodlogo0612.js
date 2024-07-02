const obj = { a: "a1", b: "b2b", c: "c", d: "d" }

const newObj = Object.values(obj);

const keys = Object.keys(obj);


newObj.map((el, i) => obj[keys[i]] = el.toUpperCase())

console.log(obj)