let myAdder = function (num1, num2) {
    let added = num1 + num2;
    return added;
}

let result = myAdder(2, 3);

console.log(result);

let myMultiplier = function (num1, num2) {
    return num1 * num2;
}

console.log(myMultiplier(2, 3));

let guestUser = function (name = 'Robert Xu', courseCount = 2) {
    return 'Hello ' + name + 'and your course count is ' + courseCount;
};

console.log(guestUser());
console.log(guestUser('Richard Xu',3));