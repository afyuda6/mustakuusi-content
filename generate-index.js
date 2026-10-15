const fs = require("fs");
const path = require("path");

const assetsDir = path.join(__dirname, "assets");
const files = fs.readdirSync(assetsDir).filter(f => f.endsWith(".png"));

fs.writeFileSync(
    path.join(assetsDir, "index.json"),
    JSON.stringify(files, null, 2)
);

console.log(`Generated index.json with ${files.length} files`);