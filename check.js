let fs = require('fs');

let jsontxt = fs.readFileSync(process.argv[2], "utf8");
let json = JSON.parse(jsontxt);

let map = new Map();

for (let p of json)
{
    if (map.has(p.phrase))
        throw new Error(`Duplicate phrase: ${p.phrase}`);
    map.set(p.phrase, p.translation);
}