import fs from "node:fs";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
function readDoc(cb) {
  fs.readFile(__filename, cb);
}
setTimeout(() => {
  console.log("Hello");
}, 0);
console.log("Waiting");
readDoc(function (err, buffer) {
  if (!err) {
    console.log("Doc: " + buffer.toString());
  }
});
