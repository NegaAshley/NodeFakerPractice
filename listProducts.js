var faker = require("faker");

var numFakeData = 10;

console.log("===================");
console.log("WELCOME TO MY SHOP!");
console.log("===================");

for(var i = 0; i < numFakeData; i++){
    console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"))
}