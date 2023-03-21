const fs = require("fs");
const path = require("path");
const currentFileName = path.basename(__filename);

fs.readdirSync(__dirname)
.filter((fileName)=> fileName!==currentFileName && /\.js$/.test(fileName))
.forEach((fileName) => {
  const absPath = path.resolve(__dirname, fileName);
  const TEST = require(absPath);
});
