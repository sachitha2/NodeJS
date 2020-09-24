const fs = require('fs');
console.log("started reading files");
const files = fs.readdirSync("./assets");
console.log("complete");
console.log(files);