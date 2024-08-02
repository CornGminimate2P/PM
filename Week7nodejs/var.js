let d = "2024/08/02";
// use slice the substing is useless
let dd = d.slice(8,10);
let mm = d.slice(5,7);
let yy = d.slice(0,4);
yy = parseInt(yy) + 543;

console.log("marcuscode".includes("code"));
console.log("marcuscode".repeat(3));
console.log("marcuscode".substring(3, 6));
console.log("marcuscode".toUpperCase());
console.log("marcuscode".toLowerCase());
console.log(" marcuscode ".trim());

// let dd = d.substring(8,10);
// let mm = d.substring(5,7);
// let yy = d.substring(0,4);

let server = "mahanakorn";
let textbox = "Mahanakorn";

server.toLowerCase() == textbox.toLowerCase();

console.log(dd + "-" + mm + "-" + yy);