//字符的Unicode表示法

console.log("\u0061"); //a
console.log("\uD842\uDFB7"); //𠮷

//最佳实践，将码点放入打括号，就能正确解读该字符

console.log("\u{20BB7}"); // 𠮷
console.log("\u{41}\u{42}\u{43}"); // ABC

let hello = 123;
console.log(hello); // 123

console.log("\u{1F680}" === "\uD83D\uDE80"); // true

//在javascript中有6种方法可以表示一个字符
console.log("z" === "z"); //true
console.log("\172" === "z"); //true
console.log("\x7A" === "z"); //true
console.log("\u007A" === "z"); //true
console.log("\u{7A}" === "z"); //true

//字符串的遍历器接口

// for of 接口
for (let codePoint of "foo") {
  console.log(codePoint);
}
//这个遍历器的最大优点在于可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点

let text = String.fromCodePoint(0x20bb7);

//传统的for循环会认为它包含两个字符(都不可打印)
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}
// " "
// " "
//for...of循环可以正确识别出这个字符
for (let i of text) {
  console.log(i); //𠮷
}

//JSON.stringify()返回Json字符串

//模版字符串

let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;
function compile(template) {
  const evalExpr = /<%=(.+?)%>/g;
  const expr = /<%([\s\S]+?)%>/g;

  template = template
    .replace(evalExpr, "`); \n  echo( $1 ); \n  echo(`")
    .replace(expr, "`); \n $1 \n  echo(`");

  template = "echo(`" + template + "`);";

  let script = `(function parse(data){
      let output = "";
  
      function echo(html){
        output += html;
      }
  
      ${template}
  
      return output;
    })`;
  console.log(script);
  return script;
}

let parse = eval(compile(template));
console.log(parse({ supplies: ["broom", "mop", "cleanner"] }));
