let firstName = 'Robert';
let lastName = 'Xu';

let person = {
    firstName: firstName,
    lastName: lastName
};
console.log(person.firstName);
console.log(person.lastName);

function createPerson(firstName, lastName, age) {
    let fullName = firstName + " " + lastName;
    return {
        firstName,
        lastName,
        fullName,
        isSenior: function () {
            return age > 20;
        }
    }
}

let p = createPerson('Robert', 'Xu', 18);
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
console.log(p.isSenior());






