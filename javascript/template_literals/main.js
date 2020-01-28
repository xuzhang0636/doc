// String promitive

const message = 'This is my\n \'first\' message';
console.log(message);


//template literals
const another = `This is my
'first' message.`
console.log(another);

function sum(a, b) {
    return a + b;
};
const name = 'Robert';
const endName = 'Richard';
const email = `
Hi ${name},

${sum(1,10)},

${10 + 5},

Thanks for joining my testing.

Regards ${endName}.
`

console.log(email);