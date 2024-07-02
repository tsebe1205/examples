// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //tegsh sondgoi 

// let odd = [];

// let even = [];

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] % 2 === 0) {
//         odd.push(arr[i])
//     }
//     else {
//         even.push(arr[i])
//     }

// } odd.concat(odd);
// even.concat(even)
// console.log(odd);
// console.log(even);
// const result = odd.concat(even)


// const n = "tserenpuntsag"
// const interest = n.length * 2

// function Saving(interest,) {
//     const n = "tserenpuntsag"
//     interest = n.length * 2
//     const money = 300
//     const years = 6


// const n = "tserenpuntsag"

// const money = 600000;

// const month = 11;

// const interest = n.length * 2;

// let dans = 0;

// for (let j = 1; j <= 6; j++) {
//     for (let i = 1; i <= month; i++) {

//         dans += money;
//     }

//     dans += (dans / 100) * fee;



// }
// console.log(dans);

// // console.log(money, month, interest);


function cal(year) {
    const amount = 600000;
    const sar = 11;
    const n = "tserenpuntsag"
    const fee = n.length * 2

    let account = 0;

    for (let i = 1; i <= year; i++) {
        for (let i = 1; i <= sar; i++) {
            account += amount;
        }

        account += (account / 100) * fee;
    }
    return account.toFixed(0)
}


const arr = [20000, 10000, 5000, 1000, 500, 100, 50, 20, 10]

const balance = cal(2)

function test(balance) {
    let result = ""
    console.log(balance);
    console.log(parseInt(balance / arr[0]), 'balance');
    result += `20k  ${parseInt(balance / arr[0])}ш`
    console.log(result)
    console.log(balance - (939 * arr[0]))
    for (let i = 0; i < arr.length; i++) {
        let uldegel = balance - (939 * arr[0])
        if (uldegel => arr[i]) {

        }
    }
}

test(balance)