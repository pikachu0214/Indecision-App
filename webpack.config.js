// entry -> output 
//finds directory of absolute path __dirname and joins with public
//console.log(path.join(__dirname, "public"));

const path = require("path");
module.exports = {
 entry: "./src/app.js",
 output: {
     path: path.join(__dirname, "public"),
     filename: "bundle.js"
 }
};