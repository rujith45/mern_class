console.log("Hello");
console.warn("Warning!");
console.error("Error!");
console.table([{name:"Alice",age:"36"},{name: "Bob",age:"46"}])

eval("let a=5;console.log(\"Hello world!\");console.log(a);");

let x = 3.14;
console.log(x);

let obj = {name:"John"};
let str = JSON.stringify(obj);
console.log(str);
let back = JSON.parse(str);
console.log(back);