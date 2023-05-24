import fs from "fs";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
function readDocument(callback) {
  fs.readFile(__filename, callback);
}
const timeoutScheduled = Date.now();
setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`${delay}ms have passed since i was scheduled`);
}, 100);

console.log("Waiting...");
readDocument((err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result.toString());
  }
});
