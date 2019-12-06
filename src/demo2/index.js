const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");

const inputFile = path.resolve(__dirname, "./arrow-function.js");
const outputFile = path.resolve(process.cwd(), "./lib/demo2/output.js");
fs.readFile(inputFile, "utf8", (err, data) => {
  if (err) throw err;
  const file = babel.transform(data, {
    plugins: ["@babel/plugin-transform-arrow-functions"]
  });
  fs.writeFile(outputFile, file.code, err => {
    if (err) throw err;
    console.log("文件已被保存");
  });
});
