// // // VARIABLES
// // // let, var, const

// // //console.log(1); // Print to the Console
// // const name = "pizza";

// // const topping = "pineapple";
// // /* adding two strings;
// // contcatenation */
// // console.log(name, topping);
// // // TEMPLATE LITERALS
// // console.log(`${name} ${topping}`);

// // console.log("32" + "1000" + "str");
// // // integer

// // //booleans
// // // false, undefined,null, 0
// // let num = undefined;
// // console.log(Boolean(num));
// // fkoe;

// // let name = prompt("What is your name")
// // let age = prompt("what is your age?")
// // Let hobby = prompt("what is your hobby")
// // alert(`{prompt} is $)

// // CONDITIONALS //////////// **** THIS IS WHERE CONDITIONALS BEGIN

// // Truthy Values ///

// // FALSY VALUE
// // undefined, null, Nan,0

// // conditional operators
// // ===; 1 === 1 is true
// // ==; loose equals checks if value is the same, regardless of data type\
// // 1 !== 2; true
// // <,>, !==(NOT EQUALS), <=, >=
// // More than or equal to

// // 'kamar' === 'kamar'

// // if (this is true) {then run this}

// // if ("kamar" === "kamar")
// // {console.log("hello world")}

// // if statement
// // = ; assignment operator
// // == ; loose equals
// // ===; strict equals

// // LOGIC OPERATOR
// // || && OR
// // && AND
// // ?? NULLISH

// let x = 0;
// let y = 0;

// // does x equal 0 and y equal 1
// if (x === 0 && y === 1) {
//   console, log("hello world");
// }

// let questComplete = false;
// let questComplete2 = false;
// let slimesDefeated = 0;
// // OR OPERATOR

// if (slimesDefeated === 10) {
//   questComplete = true;
// }

// let i = 0;
// let k = 1;
// if (i === 1 || k === 1) {
//   console.log("hello world");
// }
// // if this happens or this

// // ELSE; if the statement is false

// let v = 10;
// let u = 8;
// let login = false;

// if (v === 10) {
//   console.log("hello world");
// } else {
//   console.log("goodbye world");
// }
// if (login === true) {
//   //redirect to page
// } else {
//   alert("user doesn't exist");
// }
// // else if
// /* will run if conditions before it are false and specifies a new condition
//  */
// let q = 3;
// if (q === 1) {
//   console.log("hello world");
// } else if (q === 0) {
//   console.log("goodbye world");
// } else {
//   console.log("something");
// }

// let user = "guest";

// if (user === "admin") {
//   // redirect to admin page
// } else if (user === "user") {
//   //redirect to user page
// } else {
//   alert("account not found");
// }

// let userName = prompt("Enter Your Username");

// if (userName === "kamarrr" || userName === 'collin123') {
//   alert("logged in!");
// }
// else {
//   alert("no account found");
// }
// console.log(Boolean(x));

let randomNumber = Math.floor(Math.random() * 4);
console.log(randomNumber);

let arr = ["liv", "kamar", "derrick", "jimmy"];

console.log(arr[randomNumber]);

if (arr[randomNumber] === "liv") {
  console.log("Hello world");
} else if (arr[randomNumber] === "kamar") {
  console.log("Whats poppin");
} else {
  console.log("tech your wrong");
}

let ar = ["kamar", "lucy", "kite "];

if (ar[0] === "kamar") {
  console.log("kamar");
} else if (ar[1] === "lucy");

let randomnumber = Math.floor(Math.random() * 10);
console.log(randomnumber);
let prompt5 = prompt("guess the number");
if (randomnumber === prompt5) {
  alert("success");
} else {
  alert("failure!");
}
