"use strict"

//var result = 1;
//var counter = 0;
//while (counter < 10) {
//result = result * 2;
//counter = counter + 1;
//}
//console.log(result);
// → 1024



//var result = 1;
//for (var counter = 0; counter < 10; counter = counter + 1) {
//   result = result * 2;
//}
//console.log(result);
//// → 1024


//for (var current = 20; ; current++) {
//if (current % 7 == 0)
//break;
//}
//console.log(current);
//// → 21




//if (variable == "value1") action1();
//else if (variable == "value2") action2();
//else if (variable == "value3") action3();
//else defaultAction();


//switch (prompt("Как погодка?")) {
//case "дождь":
//console.log("Не забудь зонт.");
//break;
//case "снег":
//console.log("Блин, мы в России!");
//break;
//case "солнечно":
//console.log("Оденься полегче.");
//case "облачно":
//}


//let a = 7;
//for (let i = 1; i <= a; i++) {
//   console.log(i);
//}





               // DISTRUKSIYALASH

//const max = function (a) {  // let a = arr
//   a[0] = 10;
//};
//const arr  = [1, 2, 3, 4];
//max(arr);
//console.log(arr);


//const max = function (...a) {  // let a = arr
//   a[0] = 10;
//};
//const arr  = [1, 2, 3, 4];
//max(...arr);
//console.log(arr);





//function math(a, b) {
//   function icr(a, b) {
//      return a + b;
//   }
//   function dec(a, b) {
//      return a - b;
//   }
//   let k = a > 18 ? "Welcome" : "Bye Bye";
//   return [dec, k];
//}
//let res = math(30, 20);
//console.log(res[0](10, 5));



//let arr = "Sobit";
////let a = [10, ...arr];
////console.log(a);

//function myFun(a, ...args) {
//   console.log(args);
//}
//myFun( ...arr);



//let a = {val: 22};
//let b = a;
//a.val = 15;
//console.log(b);



//let k = {val: 15};
//const max = function (k) {  // let k = obj
//   k.val = 20;
//   console.log(k);
//};
//max(k);
//console.log(k);




//let a, b;
//[...b] = [15, 20, 23, 435, 56];

//console.log(b);


//let user = {
//   name: "Otabek",
//   age: 23,
//};

//let { age, name } = user;
//console.log(name);


//let user = {
//   name: "Otabek",
//   age: 23,
//   hi: 15,
//   lang: ["uz", "eng", "ru"],
//};
//let { age, lang } = user;
//console.log(lang);


//const max = function ([a, b]) {
//   console.log(a, b);
//};

//const arr = [1, 2];
//max(arr);



//let user = { 
//   name: "Otabek",
//   age: 23,
//};
//const arr = [1, 2];
//console.log(user);



//const max = function ({x, y}) {
//   console.log(x);
//};
//let coords = {
//   x: 1,
//   y: 2,
//};
//max(coords);


//const max = function ({x: a, y: b}) {
//   console.log(x);
//};

//let coords = {
//   x: 1,
//   y: 2,
//};
//max(coords);



