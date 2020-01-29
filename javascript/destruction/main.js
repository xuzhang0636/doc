//Destructing
let [a, b, c] = [1, 2, 3];
console.log(a, b, c);

//模式匹配，等号两边的模式相同，左边的变量就会被赋予对应的值
let [foo, [
    [bar], baz
]] = [1, [
    [2], 3
]];
console.log(foo, bar, baz); // 1 2 3

let [, , third] = ["foo", "bar", "baz"];
console.log(third); // baz

let [x, y] = [1, 2, 3];
console.log(x, y); // 1,2

let [head, ...tail] = [1, 2, 3];
console.log(head); //1
console.log(tail); //[2,3]

let [one, two, ...three] = ['a'];
console.log(one); // "a"
console.log(two); //undefined
console.log(three); // []

//不完全结构,只匹配一部分，也能匹配成功
let [x1, y1] = [1, 2, 3];
console.log(x1, y1);

let [x2, [y2], z2] = [1, [2, 3], 4];
console.log(x2, y2, z2);

// 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。 
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};

// Set 结构解构赋值
let [x3, y3, z3] = new Set(['a', 'b', 'c']);
console.log(x3, y3, z3);

function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let [a4, b4, c4, d4, e4, f4, j4] = fibs();
console.log(a4, b4, c4, d4, e4, f4, j4);

// default value, 为了不解析成undefined
let [x5 = true] = [];
console.log(x5)

//null 不严格等于undefined
let [x6 = 1] = [null];
console.log(x6); //null

function test() {
    console.log('aaaa')
}
//惰性求值，只有当x7无法解析出来的时候，这个时候test()函数才会被触发
// let [x7 = test()] = [];
let [x7 = test()] = [1];
console.log(x7);

//对象的解构赋值

//数组是按照顺序，对象必须属性与变量同名，才能取到对应的值
let {
    x8,
    y8
} = {
    x8: 'aaa',
    y8: 'bbb'
};
console.log(x8, y8);

let {
    y9
} = {
    t: 'aaa'
};
console.log(y9); // undefined

//对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。
let {
    sin,
    cos
} = Math
console.log(sin(90));
console.log(cos(90));

const node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};

//分别对loc、start、line三个属性的结构赋值。最后一次对line属性的解构赋值中，只有line是变量，loc和start都是模式，不是变量
let {
    loc,
    loc: {
        start
    },
    loc: {
        start: {
            line
        }
    }
} = node;

console.log(loc);
console.log(start);
console.log(line);

let obj = {};
let arr = [];

({
    foo: obj.prop,
    bar: arr[0]
} = {
    foo: 123,
    bar: true
});

console.log(obj);
console.log(arr);

//字符串的解构
const [a10, b10, c10, d10, e10] = 'hello';
console.log(a10, b10, c10, d10, e10);

let {
    length: len
} = 'hello';

console.log(len);