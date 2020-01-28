function sum(a, b) {
    return a + b;
}

//refactor this function to arrow function

let sum2 = (a, b) => a + b;

console.log(sum2(1, 1))

function isPositive(number) {
    return number >= 0;
}

//refactor this function to arrow function

let isPositive2 = (a) => a >= 0;

console.log(isPositive2(1));

function randomNumber() {
    return Math.random;
}

//refactor this function to arrow function

let randomNumber1 = () => Math.random();

console.log(randomNumber1());

// document.addEventListener('click', function () {
//     console.log('click');
// });

document.addEventListener('click',()=>console.log('click'));

